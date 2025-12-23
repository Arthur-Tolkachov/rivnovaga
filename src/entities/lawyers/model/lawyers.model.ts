import z from "zod";

export const LawyerSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  surname: z.string(),
  patronymic: z.string(),
  certificate: z.object({
    number: z.string(),
    date: z.string(),
  }),
  phone: z.string().nullable(),

  description: z.string(),
  photo: z.object({
    url: z.string(),
    fileName: z.string(),
  }),
});

export const AboutLawyersSchema = z.object({
  title: z.string().min(1, "Поле обов`язкове"),
  subtitle: z.string().min(1, "Поле обов`язкове"),
});

export const LawyersSchema = z.object({
  lawyers: z.array(LawyerSchema),
  about_lawyers: AboutLawyersSchema,
});

export type LawyerModel = z.infer<typeof LawyerSchema>;
export type AboutLawyersModel = z.infer<typeof AboutLawyersSchema>;
export type LawyersModel = z.infer<typeof LawyersSchema>;
