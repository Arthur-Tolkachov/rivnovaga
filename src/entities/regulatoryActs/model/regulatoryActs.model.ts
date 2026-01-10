import z from "zod";

const RegulatoryActSchema = z.object({
  title: z.string(),
  link: z.string(),
  id: z.uuid(),
});

export const RegulatoryActsSchema = z.array(RegulatoryActSchema);

export type RegulatoryActModel = z.infer<typeof RegulatoryActSchema>;
