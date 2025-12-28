import z from "zod";

export const HeroDTOSchema = z.object({
  title: z.string().min(1, "Це обов`язкове поле"),
  subtitle: z.string().min(1, "Це обов`язкове поле"),
});

export type HeroDTO = z.infer<typeof HeroDTOSchema>;
