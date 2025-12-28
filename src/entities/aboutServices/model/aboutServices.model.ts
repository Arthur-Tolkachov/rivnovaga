import z from "zod";

export const AboutServicesSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().min(1),
});

export type AboutServicesModel = z.infer<typeof AboutServicesSchema>;
