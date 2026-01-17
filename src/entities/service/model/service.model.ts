import z from "zod";

import { PracticeSchema } from "@entity/practice";

export const ServiceSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1),
  description: z.string(),
  cover: z.object({
    url: z.string(),
    fileName: z.string(),
  }),
  isActive: z.boolean(),
  practices: z.array(z.string()),
});

export const ServiceWithPracticesSchema = ServiceSchema.extend({
  practices: z.array(PracticeSchema.omit({ services: true })),
});

export const ServicesArraySchema = z.array(ServiceSchema);

export type ServiceModel = z.infer<typeof ServiceSchema>;
export type ServiceWithPracticesModel = z.infer<
  typeof ServiceWithPracticesSchema
>;
