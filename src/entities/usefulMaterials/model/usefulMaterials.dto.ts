import z from "zod";

export const UsefulMaterialsDTOSchema = z.object({
  title: z.string().min(1, "Це обов`язкове поле"),
  subtitle: z.string().min(1, "Це обов`язкове поле"),
});

export type UsefulMaterialsDTO = z.infer<typeof UsefulMaterialsDTOSchema>;
