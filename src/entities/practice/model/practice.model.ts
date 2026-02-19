import z from "zod";

export const PracticeSchema = z.object({
  id: z.uuid(),
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  city: z.string(),
  caseNumber: z.string(),
  proceedingNumber: z.string(),
  isActive: z.boolean(),

  url: z.string().nullable(),

  services: z.array(z.string()).optional(),
  categories: z.array(z.string()).optional(),

  file: z.object({
    url: z.string(),
    fileName: z.string(),
  }),
});

export const PracticesArraySchema = z.array(PracticeSchema);

export type PracticeModel = z.infer<typeof PracticeSchema>;
