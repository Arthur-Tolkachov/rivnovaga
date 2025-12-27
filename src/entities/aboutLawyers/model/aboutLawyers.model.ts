import z from "zod";

export const AboutLawyersSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().min(1),
});

export type AboutLawyersModel = z.infer<typeof AboutLawyersSchema>;
