import z from "zod";

export const CtaSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export type CtaModel = z.infer<typeof CtaSchema>;
