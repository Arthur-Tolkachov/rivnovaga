import { PrismaClient } from "@prisma/client";
import slugify from "slugify";

import { LawyerModel } from "@entity/lawyer";

const prisma = new PrismaClient();

const generateSlug = (fullName: string) =>
  slugify(fullName, {
    lower: true,
    strict: true,
  });

async function main() {
  const setting = await prisma.setting.findUnique({
    where: { key: "lawyers" },
  });

  if (!setting || !Array.isArray(setting.value)) {
    throw new Error("Lawyers not found or invalid format");
  }

  const lawyers = setting.value as LawyerModel[];

  const updatedLawyers = lawyers.map((lawyer) => {
    if (lawyer.slug) {
      return lawyer;
    }

    const fullName = `${lawyer.surname} ${lawyer.name} ${lawyer.patronymic}`;
    const slug = generateSlug(fullName);

    return {
      ...lawyer,
      slug,
    };
  });

  await prisma.setting.update({
    where: { key: "lawyers" },
    data: { value: updatedLawyers },
  });

  console.log("✅ Slugs generated successfully");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
