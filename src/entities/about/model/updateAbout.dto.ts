import z from "zod";

export const UpdateAboutDTOSchema = z.array(
  z.object({
    title: z.string().min(1, "Це обов`язкове поле"),
    description: z.string().min(1, "Це обов`язкове поле"),
  })
);

export type UpdateAboutDTO = z.infer<typeof UpdateAboutDTOSchema>;
