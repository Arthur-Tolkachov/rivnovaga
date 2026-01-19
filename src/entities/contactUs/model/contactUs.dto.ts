import z from "zod";

import { PhoneValidationSchema } from "@shared/lib/validation";

export const ContactUsDTOSchema = z.object({
  name: z.string().min(1, "Це обов`язкове поле"),
  phone: PhoneValidationSchema,
  message: z.string().min(1, "Це обов`язкове поле"),
});

export type ContactUsDTO = z.infer<typeof ContactUsDTOSchema>;
