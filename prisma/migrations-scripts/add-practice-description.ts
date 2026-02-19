import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const practices = await prisma.practice.findMany({
    select: {
      id: true,
      title: true,
      city: true,
      caseNumber: true,
      description: true,
    },
  });

  for (const practice of practices) {
    if (practice.description) continue;

    await prisma.practice.update({
      where: { id: practice.id },
      data: {
        description: "",
      },
    });
  }

  console.log("Done ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
