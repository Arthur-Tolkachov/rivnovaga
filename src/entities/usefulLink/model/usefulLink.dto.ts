import z from "zod";

const UsefulLinksDTOSchema = z.array(
  z.object({
    label: z.string().min(1, "Поле обов`язкове"),
    link: z.string().min(1, "Поле обов`язкове"),
    id: z.uuid(),
  })
);

export const UsefulLinkDTOSchema = z.object({
  title: z.string().min(1, "Поле обов`язкове"),
  isActive: z.boolean(),
  data: UsefulLinksDTOSchema,
});

export type UsefulLinkDTO = z.infer<typeof UsefulLinkDTOSchema>;
