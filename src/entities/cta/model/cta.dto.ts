import z from "zod";

export const CtaDTOSchema = z.object({
  title: z.string().min(1, "Це обов`язкове поле"),
  description: z.string().min(1, "Це обов`язкове поле"),
});

export type CtaDTO = z.infer<typeof CtaDTOSchema>;
