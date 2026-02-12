import z from "zod";

export const ServiceDTOSchema = z.object({
  title: z.string().min(1, "Це обов`язкове поле"),
  slug: z.string(),
  description: z.string().min(1, "Це обов`язкове поле"),
  isActive: z.boolean(),
  practices: z.array(z.string()).nullable(),
  cover: z.object({
    url: z.string(),
    fileName: z.string(),
  }),
});

export type ServiceDTO = z.infer<typeof ServiceDTOSchema>;
