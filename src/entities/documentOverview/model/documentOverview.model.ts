import z from "zod";

export const DocumentOverviewSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1),
  file: z.object({
    url: z.string(),
    fileName: z.string(),
  }),
  isActive: z.boolean(),
});

export const DocumentOverviewsArraySchema = z.array(DocumentOverviewSchema);

export type DocumentOverviewModel = z.infer<typeof DocumentOverviewSchema>;
