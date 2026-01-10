import z from "zod";

export const RegulatoryActsDTOSchema = z.array(
  z.object({
    title: z.string().min(1, "Поле обов`язкове"),
    link: z.string().min(1, "Поле обов`язкове"),
    id: z.uuid(),
  })
);

export type RegulatoryActsDTO = z.infer<typeof RegulatoryActsDTOSchema>;
