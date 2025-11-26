import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const settings = [
  {
    key: "general",
    value: {
      name: "Адвокатське об'єднання «Рівновага»",
      phone: "+380954299650",
      email: "rivnovaga.ao@gmail.com",
      telegram: "+380954299650",
      viber: "+380954299650",
      whatsapp: "+380954299650",
    },
  },
  {
    key: "logo",
    value: {
      url: "assets/images/logo.png",
      fileName: "logo.png",
    },
  },
  {
    key: "address",
    value: {
      index: "08200",
      city: "м. Ірпінь",
      street: "вул. Джерельна",
      building: "14",
      office: "119",
    },
  },
  {
    key: "map",
    value: {
      lat: "50.520469750328935",
      lng: "30.20618508465575",
    },
  },
  {
    key: "workingDaysSchedule",
    value: {
      start: "monday",
      end: "friday",
    },
  },
  {
    key: "workingTimeSchedule",
    value: {
      start: "10:00",
      end: "18:00",
    },
  },
  {
    key: "hero",
    value: {
      title:
        "Професійна юридична підтримка у всіх сферах права. Захищаємо ваші інтереси ефективно та чесно",
      subtitle: "Ваш захист — наш пріоритет",
    },
  },
];

async function main() {
  await prisma.user.create({
    data: {
      email: "test@test",
      password: "qwerty123",
    } as Prisma.UserCreateInput,
  });

  for (const setting of settings) {
    await prisma.setting.create({
      data: {
        key: setting.key,
        value: JSON.stringify(setting.value),
      } as Prisma.SettingCreateInput,
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
