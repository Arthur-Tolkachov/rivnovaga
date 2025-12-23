import z from "zod";

export const UpdateCtaDTOSchema = z.object({
  title: z.string().min(1, "Це обов`язкове поле"),
  description: z.string().min(1, "Це обов`язкове поле"),
});

export type UpdateCtaDTO = z.infer<typeof UpdateCtaDTOSchema>;
