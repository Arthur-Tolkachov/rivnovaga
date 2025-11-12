import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const org = await prisma.organization.create({
    data: {
      name: "Рiвновага",
      logoUrl: "/images/logo.png",
    },
  });

  await prisma.user.create({
    data: {
      email: "test@test",
      password: "qwerty123",
      organizationId: org.id,
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
