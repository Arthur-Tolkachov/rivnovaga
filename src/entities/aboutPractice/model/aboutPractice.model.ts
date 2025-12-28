import z from "zod";

export const AboutPracticeSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
});

export type AboutPracticeModel = z.infer<typeof AboutPracticeSchema>;
