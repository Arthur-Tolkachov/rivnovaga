import z from "zod";

import { PracticeSchema } from "@entity/practice/model/practice.model";

export const PracticeCategorySchema = z.object({
  id: z.uuid(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  practices: z.array(z.string()),
  cover: z.object({
    url: z.string(),
    fileName: z.string(),
  }),
});

export const PracticeCategoryWithPracticesSchema =
  PracticeCategorySchema.extend({
    practices: z.array(PracticeSchema.omit({ services: true })),
  });

export const PracticeCategoryArraySchema = z.array(PracticeCategorySchema);

export type PracticeCategoryModel = z.infer<typeof PracticeCategorySchema>;
