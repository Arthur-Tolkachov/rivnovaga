import z from "zod";

export const PracticeDTOSchema = z.object({
  title: z.string().min(1, "Це обов`язкове поле"),
  city: z.string().min(1, "Це обов`язкове поле"),
  caseNumber: z.string().min(1, "Це обов`язкове поле"),
  proceedingNumber: z.string().min(1, "Це обов`язкове поле"),
  isActive: z.boolean(),

  url: z.string().nullable(),

  serviceId: z.string().nullable(),

  file: z.object({
    url: z.string(),
    fileName: z.string(),
  }),
});

export type PracticeDTO = z.infer<typeof PracticeDTOSchema>;
