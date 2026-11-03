import type { MetadataRoute } from "next"

const siteUrl = "https://b9tech.barternaija.com.ng"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/enterprise`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/investors`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms-conditions`, changeFrequency: "yearly", priority: 0.3 },
  ]
}
