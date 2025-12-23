import z from "zod";

export const HeroSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
});

export type HeroModel = z.infer<typeof HeroSchema>;
