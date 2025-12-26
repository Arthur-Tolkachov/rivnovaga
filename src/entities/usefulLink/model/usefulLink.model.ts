import z from "zod";

const UsefulLinksDataSchema = z.object({
  label: z.string(),
  link: z.string(),
  id: z.uuid(),
});

export const UsefulLinkSchema = z.object({
  title: z.string(),
  id: z.uuid(),
  isActive: z.boolean(),
  data: z.array(UsefulLinksDataSchema),
});

export const UsefulLinksSchema = z.array(UsefulLinkSchema);

export type UsefulLinkModel = z.infer<typeof UsefulLinkSchema>;
