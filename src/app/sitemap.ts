import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zerodin.pro";
  const now = new Date();

  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/products", priority: 0.9 },
    { path: "/products/athelos", priority: 0.9 },
    { path: "/products/ota-sentinel", priority: 0.9 },
    { path: "/pricing", priority: 0.8 },
    { path: "/about", priority: 0.8 },
    { path: "/blog", priority: 0.7 },
    { path: "/blog/building-from-west-africa", priority: 0.6 },
    { path: "/blog/two-products-one-standard", priority: 0.6 },
    { path: "/blog/database-per-tenant", priority: 0.6 },
    { path: "/docs", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/trust", priority: 0.7 },
    { path: "/privacy", priority: 0.5 },
    { path: "/terms", priority: 0.5 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.priority,
  }));
}
