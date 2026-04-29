import type { Metadata } from "next";
import { business } from "@/content/site";

type MetaInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: MetaInput): Metadata {
  const url = `${business.domain}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: business.name,
      locale: "en_IN"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
