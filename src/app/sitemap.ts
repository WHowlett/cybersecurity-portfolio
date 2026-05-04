import type { MetadataRoute } from "next";

const siteUrl = "https://cybersecurity-portfolio-seven-nu.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/projects",
    "/skills",
    "/resume",
    "/contact",
    "/projects/security-lab-architecture",
    "/projects/secure-network-architecture",
    "/projects/wazuh-detection-engineering",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/projects" ? 0.9 : 0.8,
  }));
}
