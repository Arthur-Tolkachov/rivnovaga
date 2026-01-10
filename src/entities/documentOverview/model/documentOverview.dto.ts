import z from "zod";

export const DocumentOverviewDTOSchema = z.object({
  title: z.string().min(1, "Це обов`язкове поле"),
  isActive: z.boolean(),
  file: z.object({
    url: z.string(),
    fileName: z.string(),
  }),
});

export type DocumentOverviewDTO = z.infer<typeof DocumentOverviewDTOSchema>;
