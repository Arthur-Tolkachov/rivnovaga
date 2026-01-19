import z from "zod";

export const ContactUsSchema = z.object({
  name: z.string(),
  phone: z.string(),
  message: z.string(),
});

export type ContactUsModel = z.infer<typeof ContactUsSchema>;
