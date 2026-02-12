import { PrismaClient } from "@prisma/client";
import slugify from "slugify";

const prisma = new PrismaClient();

const generateSlug = (title: string) =>
  slugify(title, {
    lower: true,
    strict: true,
  });

async function main() {
  const practices = await prisma.practice.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
    },
  });

  for (const practice of practices) {
    if (practice.slug) continue;

    const baseSlug = generateSlug(practice.title);

    let slug = baseSlug;
    let counter = 1;

    while (true) {
      const exists = await prisma.practice.findUnique({
        where: { slug },
        select: { id: true },
      });

      if (!exists) break;

      slug = `${baseSlug}-${counter++}`;
    }

    await prisma.practice.update({
      where: { id: practice.id },
      data: { slug },
    });
  }

  console.log("✅ Practices slugs generated");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
