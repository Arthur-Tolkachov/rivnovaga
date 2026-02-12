import { PrismaClient } from "@prisma/client";
import slugify from "slugify";

const prisma = new PrismaClient();

const generateSlug = (title: string) =>
  slugify(title, {
    lower: true,
    strict: true,
  });

async function main() {
  const services = await prisma.service.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
    },
  });

  for (const service of services) {
    if (service.slug) continue;

    const slug = generateSlug(service.title);

    await prisma.service.update({
      where: { id: service.id },
      data: { slug },
    });
  }

  console.log("✅ Service slugs generated");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
