import z from "zod";

export const UpdateHeroDTOSchema = z.object({
  title: z.string().min(1, "Це обов`язкове поле"),
  subtitle: z.string().min(1, "Це обов`язкове поле"),
});

export type UpdateHeroDTO = z.infer<typeof UpdateHeroDTOSchema>;
