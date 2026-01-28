import { getAllServices } from "@entity/service";

const services = await getAllServices();

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  additionalPaths: async () =>
    services.map((service) => ({ loc: `/services/${service.id}` })),
};
