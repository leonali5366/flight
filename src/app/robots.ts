import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // Applies to all search engine bots
      allow: "/", // Allows crawling of all pages
    },
    sitemap: "https://oppongjet.com/sitemap.xml", // Link to your sitemap
  };
}
