import z from "zod";

import { DocumentOverviewDTOSchema } from "./documentOverview.dto";

export const DocumentOverviewFormSchema = DocumentOverviewDTOSchema.extend({
  file: z.file({ message: "Документ обов'язковий" }).or(
    z
      .object({
        url: z.string(),
        fileName: z.string(),
      })
      .refine((val) => !!val.url, {
        message: "Документ обов'язковий",
      })
  ),
});

export type DocumentOverviewFormValues = z.infer<
  typeof DocumentOverviewFormSchema
>;
