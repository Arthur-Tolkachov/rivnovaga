import z from "zod";

export const AboutServicesDTOSchema = z.object({
  title: z.string().min(1, "Це обов`язкове поле"),
  subtitle: z.string().min(1, "Це обов`язкове поле"),
});

export type AboutServicesDTO = z.infer<typeof AboutServicesDTOSchema>;
