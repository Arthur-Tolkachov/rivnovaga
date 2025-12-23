import z from "zod";

export const AboutSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export type AboutModel = z.infer<typeof AboutSchema>;
