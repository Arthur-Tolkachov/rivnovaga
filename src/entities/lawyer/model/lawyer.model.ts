import z from "zod";

export const LawyerSchema = z.object({
  id: z.uuid(),
  slug: z.string(),
  name: z.string(),
  surname: z.string(),
  patronymic: z.string(),
  certificate: z.object({
    number: z.string(),
    date: z.string(),
  }),
  phone: z.string().nullable(),
  isActive: z.boolean(),

  description: z.string(),
  photo: z.object({
    url: z.string(),
    fileName: z.string(),
  }),
});

export const LawyersArraySchema = z.array(LawyerSchema);

export type LawyerModel = z.infer<typeof LawyerSchema>;
