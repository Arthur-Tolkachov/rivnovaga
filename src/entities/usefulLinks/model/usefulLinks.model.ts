import z from "zod";

const UsefulLinksDataSchema = z.object({
  label: z.string(),
  key: z.string(),
  link: z.string(),
});

export const UsefulLinkSchema = z.object({
  title: z.string(),
  key: z.string(),
  data: z.array(UsefulLinksDataSchema),
});

export const UsefulLinksSchema = z.array(UsefulLinkSchema);

export type UsefulLinkModel = z.infer<typeof UsefulLinkSchema>;
