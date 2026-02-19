import z from "zod";

import { PracticeSchema } from "@entity/practice";

export const ServiceSchema = z.object({
  id: z.uuid(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  cover: z.object({
    url: z.string(),
    fileName: z.string(),
  }),
  isActive: z.boolean(),
  practices: z.array(z.string()).optional(),
});

export const ServiceWithPracticesSchema = ServiceSchema.extend({
  practices: z.array(PracticeSchema.omit({ services: true })),
});

export const ServicesArraySchema = z.array(ServiceSchema);

export type ServiceModel = z.infer<typeof ServiceSchema>;
export type ServiceWithPracticesModel = z.infer<
  typeof ServiceWithPracticesSchema
>;
