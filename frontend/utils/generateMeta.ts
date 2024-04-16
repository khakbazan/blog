import { Metadata } from "next";

type GenerateMetaArgs = {
  title: string;
  description: string;
  slug?: string;
  keywords?: string[];
  indexable?: boolean;
  category: string;
};

export function generateMeta({
  description,
  slug,
  title,
  keywords,
  category,
  indexable = true,
}: GenerateMetaArgs): Metadata {
  const siteUrl = "https://blog.io";
  const siteName = "وبلاگ";

  return {
    title: title,
    description: description,
    applicationName: siteName,
    keywords: keywords,
    category: category,
    robots: {
      follow: indexable,
      index: indexable,
    },
    openGraph: {
      title: title,
      description: description,
      url: slug ? `${siteUrl}/${slug}` : siteUrl,
      siteName: siteName,
      locale: "fa_IR",
    },
    alternates: {
      canonical: slug ? `${siteUrl}/${slug}` : siteUrl,
    },
    other: {
      "og:brand": siteName,
    },
  };
}
