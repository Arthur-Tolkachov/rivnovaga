import z from "zod";

import { PhoneValidationSchema } from "@shared/lib/validation";

export const EditLawyersFormSchema = z.object({
  about_lawyers: z.object({
    title: z.string().min(1, "Поле обов`язкове"),
    subtitle: z.string().min(1, "Поле обов`язкове"),
  }),

  lawyers: z.array(
    z.object({
      id: z.uuid(),
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

      description: z.string().min(1, "Поле обов`язкове"),
      photo: z.file("File uploading error").or(
        z.object({
          url: z.string(),
          fileName: z.string(),
        })
      ),
    })
  ),
});

export type EditLawyersFormValues = z.infer<typeof EditLawyersFormSchema>;
