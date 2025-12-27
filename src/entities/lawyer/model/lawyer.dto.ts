import z from "zod";

import { PhoneValidationSchema } from "@shared/lib/validation";

export const LawyerDTOSchema = z.object({
  name: z.string().min(1, "Поле обов`язкове"),
  surname: z.string().min(1, "Поле обов`язкове"),
  patronymic: z.string().min(1, "Поле обов`язкове"),
  certificate: z.object({
    number: z.string().min(1, "Поле обов`язкове"),
    date: z.string().min(1, "Поле обов`язкове"),
  }),
  phone: z
    .string()
    .min(1, "Поле обов`язкове")
    .and(PhoneValidationSchema)
    .nullable(),
  isActive: z.boolean(),
  description: z.string().min(1, "Поле обов`язкове"),
  photo: z.object({
    url: z.string(),
    fileName: z.string(),
  }),
});

export type LawyerDTO = z.infer<typeof LawyerDTOSchema>;
