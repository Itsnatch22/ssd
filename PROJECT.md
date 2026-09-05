# SSDEXPERTZONE COMPLETE WEBSITE REVAMP

You are a senior product designer, UX engineer, and Next.js frontend architect.

You are working on an existing Next.js website called **SSDEXPERTZONE**, available at:

https://www.ssdexpertzone.com/

The website is a storage-device price comparison platform focused on SSDs, HDDs, and NVMe drives.

The current website works functionally but needs a **complete visual, UX, information-architecture, and frontend redesign**.

Use the existing project as the source of truth for functionality, data, API integrations, routes, environment variables, and backend logic. Do not destroy working functionality merely for visual changes.

The redesign should take strong visual inspiration from:

https://demo.bloomship.co/

However, DO NOT clone Bloomship and DO NOT turn this into a generic e-commerce store.

The goal is:

> **Bloomship-level visual polish + SSD Expert Zone's price-comparison functionality.**

The final website should feel like a premium modern technology/product-discovery platform rather than a basic comparison table.

---

# 1. PRIMARY OBJECTIVE

Transform SSDEXPERTZONE from a utilitarian comparison page into a polished, modern, trustworthy, responsive technology marketplace/comparison experience.

The site should immediately communicate:

* SSD discovery
* Storage-device comparison
* Price tracking
* Best deals
* Product specifications
* Brand discovery
* Buying guidance
* External retailer/affiliate purchasing
* Technical confidence
* Speed and reliability

The user should understand what the website does within approximately 3 seconds of landing on the homepage.

The visual experience should be:

* Modern
* Minimal
* Premium
* Technical without looking intimidating
* Product-focused
* Spacious
* Fast
* Responsive
* Accessible
* SEO-friendly
* Trustworthy
* Conversion-oriented

Avoid making it look like a generic SaaS dashboard.

Avoid excessive gradients.

Avoid excessive glassmorphism.

Avoid excessive animations.

Avoid huge blocks of text.

Avoid visual clutter.

---

# 2. IMPORTANT PRODUCT POSITIONING

SSDEXPERTZONE is NOT the retailer.

It is a comparison/discovery platform.

The website should therefore make it obvious that:

1. Products are discovered on SSDEXPERTZONE.
2. Prices are compared.
3. Users can inspect specifications.
4. Users can identify the best value.
5. Users can follow an external link to purchase.
6. Affiliate relationships must remain transparent.

Do not falsely imply that SSDEXPERTZONE directly sells or ships the products.

Maintain the Amazon affiliate disclosure currently present on the website.

Current disclosure:

"As an Amazon Associate, we earn from qualifying purchases. This means we may receive a small commission if you buy through our links, at no extra cost to you."

Keep this concept, but redesign its presentation so that it looks intentional and professional.

---

# 3. DESIGN DIRECTION

Use the Bloomship reference as inspiration for:

* Generous spacing
* Product-first composition
* Large visual sections
* Product cards
* Strong typography
* Clean navigation
* Clear CTAs
* Category/collection sections
* Featured products
* Modern footer
* Responsive layout

Do NOT reproduce Bloomship's exact layout or copy.

Adapt the visual philosophy to storage technology.

The website should feel closer to:

"Premium tech discovery platform"

than:

"Spreadsheet with a logo."

---

# 4. BRAND DIRECTION

Keep the existing SSDEXPERTZONE identity.

Use:

**SSDEXPERTZONE**

Primary positioning:

**Find the best storage deals without the guesswork.**

Possible supporting copy:

"Compare SSDs, HDDs, and NVMe drives by price, capacity, interface, performance, and value."

Do not blindly use this exact copy if better wording can be created while preserving the meaning.

Brand personality:

* Intelligent
* Technical
* Reliable
* Efficient
* Modern
* Slightly energetic

Do not make the brand childish.

Do not use excessive futuristic cyberpunk styling.

Do not make it resemble a gaming website unless the product itself is gaming-oriented.

---

# 5. GLOBAL NAVIGATION

Create a polished responsive navigation bar.

Desktop navigation should include:

* SSDEXPERTZONE logo/wordmark
* Home
* Deals
* SSDs
* HDDs
* NVMe
* Brands
* Guides
* Search

Include a prominent search control.

Example:

"Search SSDs, brands, capacities..."

The search should be useful, not decorative.

Mobile navigation should use a clean menu drawer.

Navigation must remain accessible and usable on:

* Desktop
* Laptop
* Tablet
* Mobile

The navigation should remain visually lightweight.

Do not create an enormous navbar.

---

# 6. HOMEPAGE HERO

Completely redesign the existing hero.

The hero should immediately communicate the site's purpose.

Suggested structure:

Eyebrow:

"SMARTER STORAGE SHOPPING"

Headline:

"Find the right drive at the right price."

Supporting paragraph:

"Compare SSDs, NVMe drives, and HDDs across capacity, interface, performance, and price."

Primary CTA:

"Explore Deals"

Secondary CTA:

"Compare Drives"

Include a visual product composition on the opposite side.

The visual can showcase:

* NVMe SSD
* 2.5" SATA SSD
* HDD
* Storage icons
* Capacity labels
* Speed indicators

Do NOT use fake performance statistics.

Do NOT invent prices.

If real product data is available, use it.

If product imagery is unavailable, create tasteful placeholders rather than broken images.

---

# 7. HERO SEARCH

The hero should include a prominent search experience.

Example:

[ Search SSDs, NVMe, HDDs, brands... ]

The search should support:

* Product name
* Manufacturer
* Model
* Capacity
* Technology
* Interface

Examples:

"Samsung 990 Pro"

"1TB NVMe"

"Kingston"

"2TB SSD"

The search UI should feel like a major feature.

Add keyboard accessibility.

Support Enter-to-search.

Provide sensible loading states.

Provide empty states.

Do not reload the entire page unnecessarily.

---

# 8. TRUST / VALUE STRIP

Immediately below the hero, add a compact feature strip.

Possible items:

### Compare

Compare storage products across important specifications.

### Discover

Find drives from leading manufacturers.

### Save

Identify competitive prices and deals.

### Decide

Use specifications and comparisons to make better buying decisions.

Use subtle icons.

Do not use fake numerical claims.

---

# 9. FEATURED DEALS

Create a major homepage section:

## Featured Deals

Subtitle:

"Storage worth looking at right now."

Display products using modern product cards.

Each card should include:

* Product image
* Product name
* Brand
* Capacity
* Technology
* Interface
* Price
* Optional previous price if real
* Deal/best-value badge when appropriate
* CTA
* Compare action

Example:

[Product Image]

Samsung 990 Pro

1TB · NVMe · PCIe 4.0

$219.99

[View Deal] [Compare]

Do not fabricate discounts.

Only display "SALE", "DEAL", "BEST VALUE", etc. when the underlying data supports it.

---

# 10. PRODUCT CARDS

Product cards are extremely important.

They should look premium and consistent.

Card hierarchy:

1. Product image
2. Brand
3. Product name
4. Capacity
5. Interface/type
6. Price
7. Value/deal indicator
8. CTA
9. Compare control

Cards should have:

* Rounded corners
* Subtle borders
* Clean shadows where appropriate
* Excellent spacing
* Hover states
* Keyboard focus states
* Responsive sizing

Avoid overdesigned cards.

Product information must remain scannable.

---

# 11. PRODUCT IMAGE HANDLING

Product images should be treated as first-class content.

Use:

* Consistent aspect ratio
* `object-fit: contain`
* Neutral background
* Lazy loading where appropriate
* Proper alt text
* Loading placeholders
* Broken-image fallback

Do not allow images to create inconsistent card heights.

If product images come from external sources, preserve appropriate attribution/usage rules.

Do not invent product imagery.

---

# 12. CATEGORY / COLLECTION SECTION

Create a visual section inspired by Bloomship's collection system.

Title:

## Explore Storage

Create category cards for:

### NVMe SSDs

Fast PCIe storage for modern systems.

### SATA SSDs

Reliable solid-state storage for desktops and laptops.

### HDDs

High-capacity storage for bulk data.

### External SSDs

Portable high-speed storage.

Potentially:

### Enterprise Storage

For servers and professional workloads.

Only include categories supported by the actual dataset.

Each category should have:

* Icon or visual
* Category name
* Short description
* Number of products if the data is real
* CTA

Example:

"Explore NVMe"

---

# 13. BROWSE BY CAPACITY

Add a visual capacity selector.

Examples:

* 250GB
* 500GB
* 1TB
* 2TB
* 4TB
* 8TB+

Users should be able to click a capacity and immediately see matching products.

This should link to filtered results.

Do not hard-code categories that aren't supported by the data.

---

# 14. BROWSE BY BRAND

Create a polished brand discovery section.

Show popular manufacturers from the actual product dataset.

Potential brands may include:

* Samsung
* Kingston
* Western Digital
* Crucial
* Seagate
* SanDisk
* Corsair
* PNY
* Silicon Power
* Orico
* Dell

Only show brands that actually exist in the current data.

Each brand should lead to a filtered product listing.

Avoid using fake brand logos if official assets are unavailable.

Text-based brand treatments are acceptable.

---

# 15. MAIN DEALS PAGE

Redesign the existing Deals page completely.

The Deals page should have:

## Header

"Storage Deals"

Supporting copy:

"Compare today's available storage offers."

Then:

### Search

Search by product, brand, or model.

### Filters

Include:

* Product type
* Brand
* Capacity
* Interface
* Technology
* Minimum capacity
* Maximum capacity
* Minimum price
* Maximum price

Potential additional filters:

* PCIe generation
* Form factor
* Read speed
* Write speed

Only include filters for fields actually available in the dataset.

---

# 16. SORTING

Provide sorting options:

* Recommended
* Price: Low to High
* Price: High to Low
* Capacity: Low to High
* Capacity: High to Low
* Newest
* Best Value
* Performance

Do not expose a sorting option unless the underlying data supports it.

---

# 17. PRODUCT LISTING UX

Desktop:

Use a visually rich product grid or hybrid layout.

Do NOT automatically preserve the current dense table as the primary experience.

However, comparison-oriented tabular information may still be available as:

"Table View"

Provide:

### Grid View

For discovery.

### Table View

For technical comparison.

This is important.

The website serves both casual shoppers and technical users.

---

# 18. TABLE VIEW

Create a polished comparison table.

Columns:

* Product
* Brand
* Capacity
* Price
* Technology
* Interface
* Form Factor
* Buy

Make the table:

* Horizontally scrollable on mobile
* Sticky header where appropriate
* Responsive
* Accessible

Do not allow the table to break the page width.

---

# 19. PRODUCT DETAIL PAGE

Create or redesign individual product pages.

URL structure should ideally be:

`/products/[slug]`

The page should include:

* Product name
* Brand
* Product image
* Price
* External retailer
* Affiliate CTA
* Product type
* Capacity
* Interface
* Form factor
* Technology
* Read speed if available
* Write speed if available
* Compatibility information if available
* Description
* Specifications
* Price history if available
* Similar products
* Alternatives
* Comparison CTA

Primary CTA:

"View Deal"

This should clearly communicate that the user is leaving SSDEXPERTZONE.

Example:

"View deal at retailer →"

Do not falsely represent the retailer.

---

# 20. PRODUCT COMPARISON

Add a dedicated comparison experience.

Users should be able to select products.

Example:

Compare up to 3 or 4 drives.

Comparison should show:

| Specification | Product A | Product B | Product C |
| ------------- | --------- | --------- | --------- |
| Price         |           |           |           |
| Capacity      |           |           |           |
| Interface     |           |           |           |
| Technology    |           |           |           |
| Form Factor   |           |           |           |
| Read Speed    |           |           |           |
| Write Speed   |           |           |           |

Highlight meaningful differences.

Do not declare a "winner" unless there is a defensible data-driven reason.

---

# 21. BEST VALUE LOGIC

If implementing a Best Value badge or ranking:

Do NOT simply choose the cheapest product.

Consider available data such as:

* Price
* Capacity
* Price per GB
* Interface
* Performance
* Product type

If a true scoring algorithm does not exist, do not fabricate one.

If necessary, create a clearly documented heuristic.

For example:

Value Score =
capacity / price

Then optionally incorporate performance if reliable data exists.

The UI must not imply expert-reviewed rankings if they are automatically calculated.

---

# 22. PRICE PER GB

Where data permits, calculate:

`price / capacity`

Display:

"$0.16/GB"

This is extremely useful for storage products.

Make the calculation precise.

Do not calculate price per GB for products where capacity or price is missing.

Handle TB/GB conversions consistently.

Document the conversion convention in code.

---

# 23. DEAL BADGES

Possible badges:

* Best Value
* Lowest Price
* Popular
* High Capacity
* Fast NVMe
* New
* Price Drop

These must be generated from actual data.

Never create fake scarcity.

Never use:

"Only 2 left!"

unless the underlying source actually provides inventory information.

---

# 24. SEARCH UX

Implement robust search.

Search should:

* Debounce requests
* Handle loading states
* Handle no results
* Handle malformed queries
* Support keyboard navigation
* Show relevant suggestions
* Link directly to product pages

Search suggestions may include:

* Products
* Brands
* Categories

Example:

Search:

`990`

Results:

Samsung 990 Pro
Samsung 990 EVO
Samsung 990 EVO Plus

---

# 25. EMPTY STATES

Create polished empty states.

Examples:

"No drives found."

"Try removing a filter or searching for a different model."

Provide:

[Clear Filters]

Do not show an empty white screen.

---

# 26. LOADING STATES

Use skeleton loaders for:

* Product cards
* Search results
* Product detail sections
* Tables

Avoid full-page spinners whenever possible.

The interface should feel fast even when data is loading.

---

# 27. ERROR STATES

Handle:

* API failure
* Product unavailable
* Image failure
* Invalid product slug
* Empty dataset
* Network failure

Example:

"Something went wrong while loading these deals."

[Try Again]

Do not expose raw errors or stack traces to users.

---

# 28. STATS SECTION

The current website contains statistics such as:

* Products
* Top Brands
* Hours Updated
* Daily Users

These currently appear as zero/placeholder values.

DO NOT preserve those values.

Only display statistics that can be generated from real data.

If real statistics are available, display them dynamically.

For example:

"1,240+ drives tracked"

"42 brands"

"Updated daily"

If there is no reliable data, remove the statistic entirely.

Never fabricate traffic numbers.

---

# 29. GUIDES / EDUCATIONAL CONTENT

Create a "Guides" section if the project architecture permits it.

Potential topics:

* SSD vs HDD
* NVMe vs SATA
* How much storage do you need?
* What is PCIe 4.0?
* What is PCIe 5.0?
* SSD endurance explained
* TBW explained
* How to choose an SSD
* Best SSD for gaming
* Best SSD for laptops
* Best SSD for creators

The content should be useful and SEO-friendly.

Do not generate meaningless filler articles.

---

# 30. FOOTER

Completely redesign the footer.

Include:

### Brand

SSDEXPERTZONE

"Compare storage. Buy smarter."

### Explore

* SSDs
* NVMe
* HDDs
* Deals
* Brands
* Guides

### Company

* About
* Contact
* Privacy Policy

Only include pages that actually exist or will be implemented.

### Disclosure

Keep the affiliate disclosure.

### Copyright

© 2026 SSDEXPERTZONE. All rights reserved.

Do not leave placeholder links.

---

# 31. CONTACT PAGE

Create a polished contact page.

Include:

* Title
* Short explanation
* Contact form
* Email/contact information if available
* FAQ or common questions

Form fields:

* Name
* Email
* Subject
* Message

Validate everything.

Do not expose private backend information.

---

# 32. PRIVACY PAGE

Preserve and redesign the existing Privacy Policy page.

Make sure it remains accessible from the footer.

Do not delete legal content simply because the UI is being redesigned.

---

# 33. RESPONSIVE DESIGN

This is mandatory.

Design for:

### Mobile

320px+

### Tablet

768px+

### Desktop

1024px+

### Large desktop

1440px+

The site must not merely "shrink" on mobile.

Reflow components intentionally.

Mobile product cards should remain readable.

Filters should become a drawer or modal.

Tables should horizontally scroll.

Navigation should collapse cleanly.

Hero content should stack intelligently.

---

# 34. ACCESSIBILITY

Implement proper accessibility.

Requirements:

* Semantic HTML
* Proper heading hierarchy
* Keyboard navigation
* Visible focus states
* ARIA labels where needed
* Accessible buttons
* Accessible forms
* Sufficient contrast
* Alt text
* Reduced motion support
* Screen-reader-friendly states

Do not rely on color alone to communicate information.

---

# 35. ANIMATION

Use subtle animation.

Good examples:

* Card hover elevation
* Image transitions
* Button hover
* Section reveal
* Filter transitions
* Mobile menu animation
* Skeleton shimmer

Do NOT animate everything.

Respect:

`prefers-reduced-motion`

Animation should support usability rather than become the main attraction.

---

# 36. PERFORMANCE

This is a Next.js project.

Use Next.js properly.

Prefer:

* Server Components where appropriate
* Client Components only where interaction requires them
* `next/image`
* Dynamic imports where useful
* Streaming/loading states
* Proper caching
* Metadata
* Optimized fonts
* Minimal JavaScript

Do not turn the entire application into a giant `"use client"` component.

Avoid unnecessary dependencies.

Do not install libraries merely because they make simple CSS easier.

---

# 37. DATA / BACKEND SAFETY

This is a redesign, not a backend rewrite.

Do not break:

* Existing API routes
* Database access
* Environment variables
* Affiliate URLs
* Product ingestion
* Scheduled jobs
* Price updates
* Existing server-side logic

Before modifying data logic, inspect the current architecture.

Reuse existing functions where possible.

Do not duplicate API logic.

Do not expose secrets to the browser.

Never move private environment variables into `NEXT_PUBLIC_*` merely to make the frontend work.

---

# 38. NEXT.JS ARCHITECTURE

Maintain a clean architecture.

Prefer a structure similar to:

app/
page.tsx
deals/
page.tsx
products/
[slug]/
page.tsx
compare/
page.tsx
brands/
page.tsx
guides/
page.tsx
contact/
page.tsx
privacy/
page.tsx

components/
navbar/
hero/
product-card/
product-grid/
filters/
comparison/
footer/
search/
categories/

lib/
api/
data/
utils/
formatting/

Use the existing project structure if it already has an established architecture.

Do not reorganize the entire repository without reason.

---

# 39. TYPESCRIPT

Use strict TypeScript.

Create proper types/interfaces for:

* Product
* Brand
* Category
* Filter
* Price
* Comparison
* Search result

Avoid:

`any`

unless absolutely unavoidable.

Do not silence TypeScript errors with arbitrary casts.

---

# 40. URL / FILTER STATE

Filters should ideally be represented in the URL.

Example:

`/deals?brand=samsung&capacity=1000&type=nvme`

This allows users to:

* Bookmark filtered results
* Share searches
* Reload pages without losing state
* Use browser back/forward

Make filter state predictable.

---

# 41. SEO

Implement strong SEO.

Every page should have appropriate:

* Title
* Description
* Canonical URL
* Open Graph metadata
* Twitter/X metadata where appropriate

Product pages should generate dynamic metadata.

Example:

"Samsung 990 Pro 1TB NVMe SSD Price & Specs | SSDEXPERTZONE"

Use structured data where appropriate.

Potential schema:

* Product
* Offer
* BreadcrumbList
* Article

Only generate structured data from real data.

Do not fabricate ratings/reviews.

---

# 42. SEO CONTENT STRUCTURE

The homepage should naturally target concepts such as:

* SSD price comparison
* SSD deals
* NVMe SSD prices
* HDD prices
* storage device comparison
* best SSD deals

Do not keyword-stuff.

Content should read naturally.

---

# 43. DARK MODE

If the existing project already supports dark mode, preserve it and redesign both themes.

If implementing dark mode:

Use a sophisticated technology-oriented dark palette.

Avoid pure black backgrounds everywhere.

Maintain readable contrast.

Product imagery must remain visible.

Do not make dark mode an afterthought.

---

# 44. DESIGN SYSTEM

Create reusable design tokens.

Define:

* Colors
* Typography
* Border radius
* Shadows
* Spacing
* Container widths
* Breakpoints

Do not randomly choose different spacing values for every component.

Maintain consistency.

---

# 45. TYPOGRAPHY

Use a modern sans-serif typeface.

Prioritize:

* Excellent readability
* Strong headings
* Clear numerical typography
* Good rendering on mobile

Product prices should have strong visual hierarchy.

Technical specifications should be compact but readable.

---

# 46. COLOR SYSTEM

Create a restrained brand palette.

Suggested direction:

* Neutral/light background
* Dark text
* One primary brand accent
* Secondary subtle accent
* Success color for legitimate deals
* Warning color where necessary
* Error color

Do not use ten unrelated colors.

Do not make every button neon.

---

# 47. MOBILE FILTER EXPERIENCE

On mobile:

Display:

[Filters]

Clicking opens a bottom sheet or full-screen filter panel.

Include:

* Filter controls
* Apply button
* Clear button

Show active filter count:

"Filters (3)"

This is significantly better than attempting to squeeze desktop filters into a mobile layout.

---

# 48. MOBILE PRODUCT CARD

Mobile cards should show only the most important information.

Example:

Product image

Samsung 990 Pro

1TB · NVMe · PCIe 4.0

$219.99

$0.22/GB

[View Deal]

[Compare]

Do not dump 15 specifications into a mobile card.

---

# 49. DESKTOP PRODUCT EXPERIENCE

Desktop should take advantage of available space.

Use:

* Product grids
* Side filters
* Comparison controls
* Technical metadata
* Larger product imagery

Maintain a maximum content width.

Do not stretch the website across the entire screen unnecessarily.

---

# 50. MICROCOPY

Use concise, useful labels.

Avoid generic labels like:

"Click Here"

Prefer:

"View Deal"

"Compare"

"See Specifications"

"Explore NVMe"

"Browse 1TB Drives"

---

# 51. AFFILIATE CTA BEHAVIOR

Affiliate links should:

* Be clearly recognizable
* Open appropriately
* Preserve tracking parameters
* Never expose private credentials
* Not be broken by frontend routing

Where appropriate, add external-link indicators.

Do not disguise affiliate links as internal product pages.

---

# 52. SECURITY

Do not introduce:

* Exposed API keys
* Client-side secrets
* Unsafe HTML rendering
* Unvalidated query parameters
* Dangerous URL redirects

Validate external URLs before redirecting users.

Do not trust product data blindly.

---

# 53. DATA VALIDATION

Gracefully handle:

* Missing price
* Missing image
* Missing brand
* Missing capacity
* Invalid capacity
* Missing specifications
* Broken affiliate link
* Invalid product slug

Never render:

`undefined`

`null`

`NaN`

or malformed currency.

---

# 54. CURRENCY

Preserve the currency used by the existing data source.

Do not arbitrarily convert prices.

If multi-currency support exists, make it explicit.

Price formatting should be centralized in a utility.

Example:

`formatPrice(price, currency)`

---

# 55. PRODUCT DETAIL SPECIFICATIONS

Present technical specifications using a clean specification table.

Example:

### Specifications

| Specification | Value       |
| ------------- | ----------- |
| Capacity      | 1TB         |
| Type          | NVMe SSD    |
| Interface     | PCIe 4.0 x4 |
| Form Factor   | M.2 2280    |
| Read Speed    | ...         |
| Write Speed   | ...         |

Do not display empty rows.

---

# 56. RELATED PRODUCTS

Product pages should contain:

## You May Also Like

Show genuinely related products based on:

* Brand
* Capacity
* Type
* Interface

Do not simply display random products.

---

# 57. COMPARISON ENTRY POINT

Every product card should have a small:

"Compare"

control.

When selected, the product is added to a comparison tray.

Comparison tray:

"2 drives selected"

[Compare Now]

Allow removing products.

On mobile, the tray should remain accessible without covering important content.

---

# 58. VISUAL HIERARCHY

The page hierarchy should feel intentional.

A homepage should flow approximately as:

1. Navigation
2. Hero
3. Search
4. Trust/value strip
5. Featured deals
6. Storage categories
7. Capacity discovery
8. Brands
9. Guides
10. Final CTA
11. Footer

Adjust based on actual content availability.

Do not render empty sections.

---

# 59. FINAL HOMEPAGE CTA

Add a strong final section.

Example:

## Ready to find your next drive?

"Compare storage products and find the option that makes the most sense for your setup."

Buttons:

[Browse Deals]

[Compare Drives]

Keep it concise.

---

# 60. 404 PAGE

Create a polished 404 page.

Example:

"That drive couldn't be found."

"Looks like this product has left the building."

[Back to Deals]

Do not show a generic Next.js error page.

---

# 61. FAVICON / BRAND ASSETS

Inspect the existing project for:

* Logo
* Favicon
* Icons
* Existing brand assets

Preserve useful assets.

Replace poor placeholder assets where necessary.

Do not invent a completely unrelated identity.

---

# 62. COMPONENT REUSABILITY

Do not copy/paste product cards across pages.

Create reusable components.

Examples:

`ProductCard`

`ProductGrid`

`ProductTable`

`FilterPanel`

`SearchBar`

`BrandCard`

`CategoryCard`

`ComparisonTray`

`PriceDisplay`

`ProductSpecifications`

`AffiliateButton`

---

# 63. NO FAKE DATA

This rule is critical.

Do NOT invent:

* Prices
* Product counts
* Users
* Brands
* Reviews
* Ratings
* Discounts
* Inventory
* Performance statistics
* Update frequencies

Use actual data.

If data does not exist, design the UI so the missing information can be omitted gracefully.

---

# 64. NO PLACEHOLDER UI IN PRODUCTION

Do not leave:

* Lorem ipsum
* "Coming soon"
* Dummy products
* Fake statistics
* Broken images
* Empty buttons
* Dead links
* Placeholder text

Every visible UI element must either work or be intentionally omitted.

---

# 65. QUALITY BAR

The final result should look like a professionally designed commercial technology platform.

It should NOT look like:

* A beginner Next.js project
* A Tailwind component demo
* An admin dashboard
* A spreadsheet
* A generic AI-generated website
* A Bloomship clone

It should feel like a real product.

---

# 66. IMPLEMENTATION PROCESS

Before changing code:

1. Inspect the existing repository.
2. Identify the Next.js version.
3. Identify routing architecture.
4. Identify styling system.
5. Identify API/data sources.
6. Identify database usage.
7. Identify environment variables.
8. Identify affiliate-link logic.
9. Identify existing reusable components.
10. Identify existing pages.
11. Identify existing SEO configuration.
12. Identify image handling.
13. Identify deployment assumptions.

Do not start rewriting blindly.

---

# 67. PRESERVE FUNCTIONALITY

Before finishing, verify that all existing functionality still works.

Especially:

* Product retrieval
* Search
* Filters
* Sorting
* Product links
* Affiliate links
* Price rendering
* Product detail pages
* API routes
* Dynamic routes
* Environment variables
* Metadata
* Privacy page
* Contact functionality

---

# 68. TESTING

Test:

### Desktop

1440px
1280px
1024px

### Tablet

768px

### Mobile

390px
375px
320px

Test:

* Navigation
* Search
* Filters
* Sorting
* Product cards
* Product detail pages
* Comparison
* External links
* Forms
* Empty states
* Loading states
* Error states

---

# 69. ACCESSIBILITY TEST

Verify:

* Keyboard-only navigation
* Tab order
* Focus visibility
* Form labels
* Button names
* Image alt text
* Heading hierarchy
* Contrast
* Reduced motion

---

# 70. PERFORMANCE TEST

Verify:

* No unnecessarily large client bundles
* Images optimized
* No layout shifts caused by images
* No blocking scripts
* No unnecessary API requests
* Proper loading states
* Proper caching where appropriate

---

# 71. FINAL DESIGN PRINCIPLE

The most important principle is:

> **Make the products visually attractive, but make the comparison experience intellectually useful.**

The site should make someone want to browse it while simultaneously helping them make a better storage purchase.

Bloomship provides the visual inspiration.

SSDEXPERTZONE provides the product intelligence.

Combine those two ideas into a single coherent experience.

---

# 72. FINAL ACCEPTANCE CRITERIA

The redesign is complete only when:

* The homepage feels completely modernized.
* The visual hierarchy is significantly stronger.
* Product discovery feels effortless.
* Search is prominent.
* Filters are intuitive.
* Product cards are polished.
* Product pages are useful.
* Comparison functionality is easy to access.
* Mobile UX is excellent.
* Desktop UX is excellent.
* Existing backend functionality remains intact.
* Affiliate disclosure remains visible.
* No fake statistics exist.
* No fake product data exists.
* No broken links exist.
* No placeholder content remains.
* SEO metadata exists.
* Accessibility has been considered.
* Loading/error/empty states are implemented.
* The site feels like a premium technology platform rather than a raw comparison table.

Do not stop after creating a new homepage.

The redesign must cover the **entire user journey**:

Landing → Search → Browse → Filter → Compare → Inspect Product → Follow Deal → Return/Browse More.

Use the existing project's real data and functionality wherever possible.

Do not rewrite working backend logic unnecessarily.

Do not introduce unnecessary dependencies.

Do not sacrifice performance for visual effects.

Do not sacrifice usability for aesthetics.

Build the redesign as if this were a production website being handed to a real client.
