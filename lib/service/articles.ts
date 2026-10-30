import 'server-only';

import type { ComponentProps } from 'react';
import { defineQuery, PortableText } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/live';

type PortableTextValue = ComponentProps<typeof PortableText>['value'];

export type ArticleSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  authorName?: string | null;
  publishedAt?: string | null;
};

export type Article = ArticleSummary & {
  body?: PortableTextValue | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
  imageWidth?: number | null;
  imageHeight?: number | null;
};

const ARTICLES_QUERY = defineQuery(`
  *[_type == "article" && defined(slug.current)]
    | order(coalesce(publishedAt, _createdAt) desc, _id asc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      authorName,
      publishedAt
    }
`);

const ARTICLE_QUERY = defineQuery(`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    authorName,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "imageAlt": mainImage.alt,
    "imageWidth": mainImage.asset->metadata.dimensions.width,
    "imageHeight": mainImage.asset->metadata.dimensions.height,
    body[] {
      ...,
      _type == "image" => {
        ...,
        "asset": asset->{
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        }
      }
    }
  }
`);

export async function getArticles(): Promise<ArticleSummary[]> {
  const { data } = await sanityFetch({
    query: ARTICLES_QUERY,
    perspective: 'published',
    stega: false,
  });

  return data as ArticleSummary[];
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const { data } = await sanityFetch({
    query: ARTICLE_QUERY,
    params: { slug },
    perspective: 'published',
    stega: false,
  });

  return data as Article | null;
}
