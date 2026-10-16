import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NEWS_ARTICLES } from "@/data/news";
import NewsArticleDetailClient from "@/components/NewsArticleDetailClient";

export async function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "समाचार (News)",
    };
  }

  return {
    title: `${article.titleHi} | वैश्य नटवर गोयल`,
    description: article.excerptHi,
    openGraph: {
      title: article.titleHi,
      description: article.excerptHi,
      images: [
        {
          url: article.image,
          width: 800,
          height: 600,
          alt: article.titleHi,
        },
      ],
    },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return <NewsArticleDetailClient slug={slug} />;
}
