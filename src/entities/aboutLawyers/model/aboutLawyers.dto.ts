import z from "zod";

export const AboutLawyersDTOSchema = z.object({
  title: z.string().min(1, "Це обов`язкове поле"),
  subtitle: z.string().min(1, "Це обов`язкове поле"),
});

export type AboutLawyersDTO = z.infer<typeof AboutLawyersDTOSchema>;
