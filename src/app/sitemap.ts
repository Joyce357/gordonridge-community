import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gordonridge.ca";

  const routes = [
    "",
    "/about",
    "/programs",
    "/impact",
    "/gallery",
    "/news-events",
    "/get-involved",
    "/partners",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
