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

const WorkingScheduleSchema = z.object({
  start: z.string().min(1, "Поле обов`язкове"),
  end: z.string().min(1, "Поле обов`язкове"),
});

const GeneralSchema = z.object({
  name: z
    .string()
    .min(1, "Це обов`язкове поле")
    .min(2, "Назва має містити мінімум 2 символи"),
  email: EmailValidationSchema,
  phone: z
    .string()
    .min(1, "Поле обов`язкове")
    .and(PhoneValidationSchema)
    .nullable(),
  telegram: PhoneValidationSchema.nullable(),
  viber: PhoneValidationSchema.nullable(),
  whatsapp: PhoneValidationSchema.nullable(),
});

export const UpdateProfileDTOSchema = z.object({
  general: GeneralSchema,
  logo: z.object({
    url: z.string(),
    fileName: z.string(),
  }),
  address: AddressSchema,
  map: MapSchema,
  workingDaysSchedule: WorkingScheduleSchema,
  workingTimeSchedule: WorkingScheduleSchema,
});

export type UpdateProfileDTO = z.infer<typeof UpdateProfileDTOSchema>;
