import z from "zod";

export const ServiceSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1),
  description: z.string(),
  cover: z.object({
    url: z.string(),
    fileName: z.string(),
  }),
  isActive: z.boolean(),
  createdAt: z.date(),
});

export const ServicesArraySchema = z.array(ServiceSchema);

export type ServiceModel = z.infer<typeof ServiceSchema>;
