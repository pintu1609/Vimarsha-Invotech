import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vimarsha-invotech.vercel.app/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://vimarsha-invotech.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://vimarsha-invotech.vercel.app/services",
      lastModified: new Date(),
    },
    {
      url: "https://vimarsha-invotech.vercel.app/vision",
      lastModified: new Date(),
    },
    {
      url: "https://vimarsha-invotech.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}
