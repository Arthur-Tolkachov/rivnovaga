import z from "zod";

export const EditHeroSectionFormSchema = z.object({
  hero: z.object({
    title: z.string().min(1, "Поле обов`язкове"),
    subtitle: z.string().min(1, "Поле обов`язкове"),
  }),
});

export type EditHeroSectionFormValues = z.infer<
  typeof EditHeroSectionFormSchema
>;
