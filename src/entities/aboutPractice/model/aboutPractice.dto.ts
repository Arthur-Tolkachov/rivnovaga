import z from "zod";

export const AboutPracticeDTOSchema = z.object({
  title: z.string().min(1, "Це обов`язкове поле"),
  subtitle: z.string().min(1, "Це обов`язкове поле"),
});

export type AboutPracticeDTO = z.infer<typeof AboutPracticeDTOSchema>;
