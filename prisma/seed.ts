import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const organization = await prisma.organization.create({
    data: {
      name: "Адвокатське об'єднання «Рівновага»",
      phone: "+380954299650",
      email: "rivnovaga.ao@gmail.com",
      telegram: "+380954299650",
      viber: "+380954299650",
      whatsapp: "+380954299650",

      logo: {
        create: {
          url: "assets/images/logo.png",
          fileName: "logo.png",
        },
      },

      address: {
        create: {
          index: "08200",
          city: "м. Ірпінь",
          street: "вул. Джерельна",
          building: "14",
          office: "119",
        },
      },

      map: {
        create: {
          lat: "50.520469750328935",
          lng: "30.20618508465575",
        },
      },
      workingDaysSchedule: {
        create: {
          start: "monday",
          end: "friday",
        },
      },
      workingTimeSchedule: {
        create: {
          start: "10:00",
          end: "18:00",
        },
      },
    } as Prisma.OrganizationCreateInput,
  });

  await prisma.user.create({
    data: {
      email: "test@test",
      password: "qwerty123",
      organization: { connect: { id: organization.id } },
    } as Prisma.UserCreateInput,
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
