import z from "zod";

export const EditCtaSectionFormSchema = z.object({
  cta: z.object({
    title: z.string().min(1, "Поле обов`язкове"),
    description: z.string(),
  }),
});

export type EditCtaSectionFormValues = z.infer<typeof EditCtaSectionFormSchema>;
