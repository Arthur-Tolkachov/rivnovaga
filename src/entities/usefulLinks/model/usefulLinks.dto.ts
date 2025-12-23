import z from "zod";

const UsefulLinksDataDTOSchema = z.array(
  z.object({
    label: z.string().min(1, "Поле обов`язкове"),
    key: z.string().min(1, "Поле обов`язкове"),
    link: z.string().min(1, "Поле обов`язкове"),
  })
);

export const UpdateUsefulLinksDTOSchema = z.array(
  z.object({
    title: z.string().min(1, "Поле обов`язкове"),
    key: z.string().min(1, "Поле обов`язкове"),
    data: UsefulLinksDataDTOSchema,
  })
);

export type UpdateUsefulLinksDTO = z.infer<typeof UpdateUsefulLinksDTOSchema>;
