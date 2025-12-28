import z from "zod";

export const AboutDTOSchema = z.array(
  z.object({
    title: z.string().min(1, "Це обов`язкове поле"),
    description: z.string().min(1, "Це обов`язкове поле"),
  })
);

export type AboutDTO = z.infer<typeof AboutDTOSchema>;
