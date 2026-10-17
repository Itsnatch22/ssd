# WordPress content management integration

## Goal and current state

Connect SSDEXPERTZONE to WordPress as a **headless CMS** so authorized editors can create, update, unpublish, and delete site content without editing the Next.js source or SQL tables. The existing Next.js App Router site remains the public website and controls its layout and styling; WordPress supplies structured content over its REST API.

The project currently has two different content sources:

- **Product catalog:** rows in Supabase `public.ssd_products`, read and mapped by `lib/service/products.ts`. The fields include name, brand, price, capacity, technology, condition, warranty, retailer URL, affiliate tag, featured flag, and image URL. Product slugs are currently generated from the name.
- **Editorial/site content:** guides and page copy are hard-coded in route files. Examples include `/guides` and its three guide routes, `/about`, `/methodology`, `/privacy`, `/terms`, and `/affiliate-disclosure`. Site-level metadata, the sitemap, and some navigation are also defined in Next.js.
- **Other Supabase responsibilities:** contact form submissions and analytics/click tracking use Supabase and are outside the CMS migration.

This means connecting WordPress only as a blog would not make the catalog or current static pages editable. The recommended scope is to manage **products and editorial content** in WordPress, while leaving Next.js responsible for rendering and Supabase responsible for operational data.

## Recommended architecture

```text
Editors
  └─ WordPress Admin
       ├─ Products (custom post type + structured fields)
       ├─ Guides and articles (posts)
       ├─ Managed pages (pages)
       └─ Media Library
              │ WordPress REST API (published content)
              ▼
       Next.js server-side CMS client
         ├─ Product mapping → existing product UI
         ├─ Article/page rendering → existing site layout
         └─ Revalidation webhook → invalidate changed routes/cache

Next.js ── contact submissions, analytics, click tracking ── Supabase
```

Keep WordPress separate from the public frontend. Do not iframe the WordPress site or put WordPress editor credentials in browser code. Fetch CMS content on the server and expose only the fields required to render published content.

### Source-of-truth decision

When a content type moves to WordPress, WordPress becomes its sole write source. Do not maintain editable copies of the same product in both WordPress and Supabase. A one-time import/export may be used for migration and rollback, but ongoing synchronization in both directions would introduce conflicts and deletion ambiguity.

Retain Supabase for contact submissions and analytics. Remove or retire the `ssd_products` table only after the WordPress-backed catalog has passed verification and a rollback/export has been retained. Until then, keep the old table as a read-only migration backup; do not continue accepting product edits there.

## WordPress content model

Use the WordPress REST API (`/wp-json/wp/v2/...`) with a small site-specific plugin for the product content type, registered metadata, validation, and content-change webhook. A purpose-built plugin keeps the schema portable and avoids making critical behavior depend on a collection of unrelated plugins.

### Products

Register a `product` custom post type with REST API support, editor/admin UI support, and public published records. Use the title as the product name, the WordPress slug as the stable public slug, the featured image for product photography, and registered REST-visible metadata or taxonomies for structured comparison fields.

| WordPress field | Purpose / mapping to current application |
| --- | --- |
| Title | Product `name` |
| Slug | Stable URL key for `/products/[slug]`; do not derive it from the title at read time |
| Brand taxonomy (or validated text field) | Product `brand`; use a taxonomy if editors need consistent filtering/brand archives |
| `price` (decimal) | Product `price` |
| `capacity_gb` (positive numeric) | Product `capacity_gb` |
| `technology` (text or taxonomy) | Product `technology` |
| `form_factor` (text or taxonomy) | Product `form_factor`; currently inferred from technology in the mapper |
| `condition` (controlled text/taxonomy) | Product `condition` |
| `warranty` (text, optional) | Product `warranty` |
| `amazon_url` (validated URL) | Retailer destination used by product and deal links |
| `affiliate_tag` (optional) | Per-product tag, if retained; define precedence with the site-wide tag |
| `featured` (boolean) | Inclusion in featured deals |
| Featured image | `image_url` and image alt text; return the media URL and alt text in the API |
| Excerpt / summary (optional) | Product description if editors need control; otherwise keep the current derived description |
| SEO title and description (optional) | Product metadata where page-specific SEO is desired |

Define and validate the required fields at the WordPress boundary: non-empty name/brand/technology/condition, non-negative price, positive capacity, valid retailer URL, and sensible maximum lengths. Decide whether a missing warranty or image uses the current display fallback or is rejected before publication. Product metadata should be registered with explicit types, REST exposure, and appropriate sanitization/authorization callbacks.

### Guides and articles

Use WordPress posts for buying guides and future editorial articles. Store title, stable slug, body, excerpt, publication status/date, featured image, categories/tags, and SEO title/description. Preserve existing route slugs during migration:

- `/guides/ssd-vs-hdd`
- `/guides/nvme-vs-sata`
- `/guides/storage-planning`

Use a published-post query for `/guides`; order and pagination should be explicit. Do not assume that every post belongs under `/guides` without a routing rule (for example, a `guide` category or a dedicated guide post type).

### Managed pages

Use WordPress pages for editorial/static copy that should be editable, initially:

- `/about`
- `/methodology`
- `/privacy`
- `/terms`
- `/affiliate-disclosure`

Keep core site chrome and interaction-oriented routes in Next.js: home page composition, deals filtering, compare, brands, contact form behavior, navigation/footer components, and APIs. The `/guides` listing can be rendered by Next.js from WordPress data while the individual guide bodies come from WordPress.

Before converting legal or disclosure pages, confirm the content and approval process with the site owner. WordPress makes publication easier but does not replace legal review.

## Next.js work required

1. **Provision WordPress**
   - Create a production WordPress site on a maintained host with TLS, backups, updates, and a staging environment.
   - Use a separate CMS hostname if practical (for example, `cms.example.com`).
   - Restrict administrator accounts, use strong authentication/MFA, and grant editors only the roles they need.
   - Install and configure the project-specific plugin described above. Enable the REST API only for the needed public read operations and authenticated editorial/webhook operations.

2. **Implement the content schema and migration**
   - Add the Product custom post type, field registration, validation, admin labels, and REST responses.
   - Add editorial conventions for guides/pages and SEO metadata. Choose a supported SEO metadata integration only if needed; do not couple frontend code to a plugin-specific response without documenting and testing it.
   - Export products from Supabase and migrate the current records, preserving fields and mapping old IDs to WordPress IDs in a migration report. Import existing guide/page text and preserve route slugs.
   - Compare row/post counts and representative field values before switching the frontend.

3. **Add a server-only WordPress client**
   - Add a typed CMS service (for example, under `lib/service/`) to fetch published products, guides, pages, and media.
   - Normalize WordPress REST responses into the existing `Product` shape in `types/product.ts` or an adjacent CMS type/mapper. Validate payloads instead of trusting remote JSON.
   - Replace the Supabase product read in `lib/service/products.ts` with the CMS service, or introduce an explicit provider boundary and switch it only after verification. Preserve the current callers and filtering behavior (`featuredOnly`, search, limits) or move those filters to server-side WP queries.
   - Update the product detail lookup to request the stable slug directly rather than fetching an arbitrary first 100 products. Ensure list endpoints paginate or request enough records for all actual catalog entries.
   - Convert hard-coded editorial pages and the guide index to fetch page/post data. Keep Next.js components responsible for the presentation and sanitize/allowlist rendered rich text or blocks.
   - Keep contact and analytics route handlers connected to Supabase.

4. **Reconcile current URLs and product links**
   - Keep all existing product slugs and editorial paths wherever possible. Record old-to-new slug mappings for any URL changes and implement permanent redirects.
   - Update `app/sitemap.ts` so published product and editorial URLs are included and drafts/deleted items are excluded. Set sensible per-content canonical URL, priority, and change-frequency behavior.
   - Generate page metadata (title, description, Open Graph image) from WordPress fields while retaining safe site-wide defaults.
   - Centralize retailer/affiliate URL construction. The current UI appends `NEXT_PUBLIC_AFFILIATE_TAG` in some links, while the redirect handler uses the product's `affiliate_tag`; choose and document one precedence rule so links do not gain duplicate or conflicting tags.
   - Configure Next.js image remote-host rules for WordPress media URLs, or use a trusted image proxy/host. Do not allow arbitrary remote image hosts from editor input.

5. **Configure freshness and deletion behavior**
   - Set an explicit server-side cache/revalidation policy for products, guides, pages, and media. The site should not depend on an editor waiting for a full deployment to see routine content updates.
   - Add a WordPress save, publish, unpublish, trash, and delete hook that sends a signed webhook to a Next.js Route Handler. Verify a timestamped HMAC signature using a server-only secret, reject replay/stale requests, and validate the post type/status/slug before invalidating cached data.
   - Revalidate affected collection pages and detail paths: product changes affect `/deals`, `/`, `/brands`, `/compare`, the product detail route, and the sitemap; guide changes affect `/guides`, the guide detail route, and the sitemap; page changes affect their own route and the sitemap.
   - Define deletion behavior explicitly: **unpublish/trash** removes an item from public queries and sitemap; **permanent delete** also invalidates cached pages and either returns a real not-found response or redirects to an approved replacement. Do not display stale deleted records from cache or quietly fall back to Supabase.
   - Treat webhook failures as visible operational errors: log safe event identifiers and status, surface delivery failures in WordPress, and support a retry or manual revalidation procedure.

6. **Add configuration and operations**
   - Add server-only environment variables such as `WORDPRESS_API_URL` and `WORDPRESS_REVALIDATION_SECRET`. If private REST reads are required, add a least-privilege credential/application password in a server-only variable; public published-content reads should not require privileged credentials.
   - Configure the variables independently for local, preview/staging, and production deployments. Never use a `NEXT_PUBLIC_` prefix for WordPress credentials or webhook secrets.
   - Document WordPress backup/restore, plugin updates, credential rotation, content recovery, import reports, and how to trigger a manual cache refresh.
   - Add monitoring for REST timeouts, non-success responses, schema/validation failures, webhook signature failures, and elevated content-fetch errors. Keep logs free of credentials and private editor data.

## API and security requirements

- Fetch only published content on public routes. Draft previews must be a separate authenticated workflow and must not be exposed through public cache keys.
- Use least-privilege WordPress credentials. Never send administrator/application passwords to the browser or store them in a public environment variable.
- Restrict CORS if browsers are ever allowed to access WordPress directly; preferred design is server-to-server fetching from Next.js.
- Escape text in React output; sanitize any HTML or Gutenberg content according to a restrictive allowlist before rendering. Do not render arbitrary editor-provided scripts or unsafe embed markup.
- Validate retailer URLs and media hosts to prevent malformed links and unsafe schemes. External retailer links should retain the existing safe `target`/`rel` behavior.
- Authenticate webhook delivery with an HMAC secret stored in deployment and WordPress configuration, verify the raw request body, and use constant-time signature comparison. Add a timestamp or unique event ID to limit replay.
- Set request timeouts and explicit error handling. A WordPress outage should produce a visible server-side error/appropriate error boundary, not a success-shaped empty catalog or a silent fallback to stale data.
- Apply rate limits and caching at the server/CDN boundary as appropriate. Avoid exposing WordPress admin endpoints or granting public write permissions.

## Rollout plan

1. Create staging WordPress and finalize the product/editorial schema and deletion policy.
2. Build and test the custom plugin and CMS client against representative content.
3. Import a copy of the current product data and editorial content; produce a migration report that identifies missing/invalid fields and slug collisions.
4. Run the WordPress-backed site in preview/staging and verify product counts, prices, featured selection, filtering/search, images, affiliate links, metadata, and route coverage against the current site.
5. Test edits, publish/unpublish, trash, permanent deletion, changed slugs, WordPress outage, expired credentials, invalid webhook signatures, and webhook retries.
6. Back up the production Supabase product table and WordPress site. Freeze product writes in Supabase, run the final import, verify counts and sample records, then switch production configuration to WordPress.
7. Monitor errors, indexing, sitemap output, cache freshness, and editor feedback. Keep the Supabase catalog backup read-only through the agreed rollback window; remove or archive it only after acceptance.

## Acceptance checklist

- [ ] An editor can add, edit, feature/unfeature, unpublish, and delete a product without changing code or SQL.
- [ ] Product listing, homepage featured deals, brand grouping, compare table, product details, and retailer links reflect published WordPress content.
- [ ] An editor can create and revise guides and managed pages while the Next.js visual design remains consistent.
- [ ] Publishing and edits become visible within the documented revalidation target without a redeploy.
- [ ] Unpublished/deleted content disappears from listings and sitemap and its old route behaves according to the deletion/redirect policy.
- [ ] Existing slugs and SEO metadata are preserved or mapped with permanent redirects.
- [ ] WordPress credentials and webhook secrets are server-only; public readers cannot mutate content.
- [ ] Supabase contact submissions and analytics continue to work independently of WordPress.
- [ ] Automated checks cover CMS mapping/validation, pagination, response failures, webhook authentication, and route revalidation.

## Main project surfaces likely to change

- `lib/service/products.ts` and `lib/service/supabaseClient.ts` — product data source and mapping.
- `types/product.ts` — stable CMS product shape and any metadata fields.
- `app/page.tsx`, `app/deals/page.tsx`, `app/brands/page.tsx`, `app/compare/page.tsx`, `app/products/[slug]/page.tsx` — product-backed routes.
- `app/guides/page.tsx`, `app/guides/*/page.tsx`, and the about/methodology/legal page routes — editorial content.
- `app/sitemap.ts` — dynamic published product/editorial URLs.
- `app/api/` — signed revalidation webhook route; existing contact and analytics endpoints remain Supabase-backed.
- Next.js image configuration, environment configuration, deployment settings, and WordPress plugin/migration assets.

This document describes the integration to build; WordPress connectivity is not implemented by this documentation change.
