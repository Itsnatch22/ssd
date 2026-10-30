import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { PortableText } from 'next-sanity';
import type { ComponentProps } from 'react';
import type { Metadata } from 'next';
import { getArticleBySlug } from '@/lib/service/articles';

type ArticleImageValue = {
  alt?: string | null;
  asset?: {
    url?: string | null;
    metadata?: {
      dimensions?: {
        width?: number | null;
        height?: number | null;
      } | null;
    } | null;
  } | null;
};

const portableTextComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-5 text-base leading-8 text-text-secondary">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mb-4 mt-10 text-3xl font-black tracking-[-0.04em] text-text-primary">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mb-3 mt-8 text-2xl font-bold text-text-primary">{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="my-6 border-l-4 border-accent pl-5 text-lg italic text-text-secondary">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mb-5 list-disc space-y-2 pl-6 text-text-secondary">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mb-5 list-decimal space-y-2 pl-6 text-text-secondary">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: { children?: React.ReactNode; value?: { href?: string } }) => {
      const href = value?.href ?? '#';
      const isExternal = /^https?:\/\//.test(href);

      return (
        <a
          href={href}
          rel={isExternal ? 'noreferrer noopener' : undefined}
          target={isExternal ? '_blank' : undefined}
          className="font-semibold text-accent underline underline-offset-4"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: { value: unknown }) => {
      const image = value as ArticleImageValue;
      const src = image.asset?.url;

      if (!src) {
        return null;
      }

      return (
        <Image
          src={src}
          alt={image.alt ?? ''}
          width={image.asset?.metadata?.dimensions?.width ?? 1200}
          height={image.asset?.metadata?.dimensions?.height ?? 800}
          className="my-8 h-auto w-full rounded-2xl"
        />
      );
    },
  },
} satisfies NonNullable<ComponentProps<typeof PortableText>['components']>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { title: 'Article not found | SSDEXPERTZONE' };
  }

  return {
    title: `${article.title} | SSDEXPERTZONE`,
    description: article.excerpt ?? article.title,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-20">
      <div className="mx-auto max-w-4xl px-4 pt-10 md:px-6 md:pt-12">
        <Link href="/guides" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
          <ArrowLeft size={16} /> Back to guides
        </Link>

        <article className="mt-8 rounded-4xl border border-border bg-surface p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Article</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-text-primary md:text-5xl">{article.title}</h1>
          {(article.authorName || article.publishedAt) && (
            <p className="mt-4 text-sm text-text-secondary">
              {article.authorName}
              {article.authorName && article.publishedAt && ' · '}
              {article.publishedAt && new Date(article.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
          {article.imageUrl && (
            <Image
              src={article.imageUrl}
              alt={article.imageAlt ?? ''}
              width={article.imageWidth ?? 1200}
              height={article.imageHeight ?? 800}
              className="mt-7 h-auto w-full rounded-2xl"
              priority
            />
          )}
          <div className="mt-7">
            {article.body && <PortableText value={article.body} components={portableTextComponents} />}
          </div>
        </article>
      </div>
    </main>
  );
}
