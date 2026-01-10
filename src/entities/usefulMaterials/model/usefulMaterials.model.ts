import z from "zod";

export const UsefulMaterialsSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().min(1),
});

export type UsefulMaterialsModel = z.infer<typeof UsefulMaterialsSchema>;
