import "dotenv/config";
import path from "node:path";

import type { PrismaConfig } from "prisma";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: path.join("prisma"),
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("POSTGRES_URL"),
  },
} satisfies PrismaConfig);
