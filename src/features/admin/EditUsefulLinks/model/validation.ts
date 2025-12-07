import z from "zod";

const UsefulLinksDataFormSchema = z.array(
  z.object({
    label: z.string().min(1, "Поле обов`язкове"),
    key: z.string().min(1, "Поле обов`язкове"),
    link: z.string().min(1, "Поле обов`язкове"),
  })
);

export const EditUsefulLinksFormSchema = z.object({
  useful_links: z.array(
    z.object({
      title: z.string().min(1, "Поле обов`язкове"),
      key: z.string().min(1, "Поле обов`язкове"),
      data: UsefulLinksDataFormSchema,
    })
  ),
});

export type EditUsefulLinksFormValues = z.infer<
  typeof EditUsefulLinksFormSchema
>;
