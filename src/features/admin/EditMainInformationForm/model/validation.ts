import z from "zod";

import {
  EmailValidationSchema,
  PhoneValidationSchema,
} from "@shared/lib/validation";

const AddressSchema = z.object({
  index: z.string().min(1, "Поле обов`язкове").nullable(),
  city: z.string().min(1, "Поле обов`язкове"),
  street: z.string().min(1, "Поле обов`язкове"),
  building: z.string().min(1, "Поле обов`язкове"),
  office: z.string().nullable(),
});

const MapSchema = z.object({
  lat: z.string().min(1, "Поле обов`язкове"),
  lng: z.string().min(1, "Поле обов`язкове"),
});

const WorkingSchedule = z.object({
  start: z.string().min(1, "Поле обов`язкове"),
  end: z.string().min(1, "Поле обов`язкове"),
});

export const EditMainInformationFormSchema = z.object({
  name: z
    .string()
    .min(1, "Це обов`язкове поле")
    .min(2, "Назва має містити мінімум 2 символи"),
  email: EmailValidationSchema.nullable(),
  phone: z
    .string()
    .min(1, "Поле обов`язкове")
    .and(PhoneValidationSchema)
    .nullable(),
  telegram: PhoneValidationSchema.nullable(),
  viber: PhoneValidationSchema.nullable(),
  whatsapp: PhoneValidationSchema.nullable(),
  logoUrl: z.file("File uploading error").or(z.string("Url uploading error")),
  address: AddressSchema,
  map: MapSchema,
  working_days_schedule: WorkingSchedule,
  working_time_schedule: WorkingSchedule,
});

export type EditMainInformationFormValues = z.infer<
  typeof EditMainInformationFormSchema
>;
