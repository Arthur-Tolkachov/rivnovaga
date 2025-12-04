import z from "zod";

export const EditAboutSectionFormSchema = z.object({
  about: z.array(
    z.object({
      title: z.string().min(1, "Поле обов`язкове"),
      description: z.string(),
    })
  ),
});

export type EditAboutSectionFormValues = z.infer<
  typeof EditAboutSectionFormSchema
>;
