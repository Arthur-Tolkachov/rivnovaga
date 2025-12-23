import z from "zod";

export const ProfileSchema = z.object({
  general: z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string().nullable(),
    telegram: z.string().nullable(),
    viber: z.string().nullable(),
    whatsapp: z.string().nullable(),
  }),
  logo: z.object({
    url: z.string(),
    fileName: z.string(),
  }),
  address: z.object({
    index: z.string().nullable(),
    city: z.string(),
    street: z.string(),
    building: z.string(),
    office: z.string().nullable(),
  }),
  map: z.object({
    lat: z.string(),
    lng: z.string(),
  }),
  workingDaysSchedule: z.object({
    start: z.string(),
    end: z.string(),
  }),
  workingTimeSchedule: z.object({
    start: z.string(),
    end: z.string(),
  }),
});

export type ProfileModel = z.infer<typeof ProfileSchema>;
