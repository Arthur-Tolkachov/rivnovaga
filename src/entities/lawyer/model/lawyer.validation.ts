import z from "zod";

import { LawyerDTOSchema } from "./lawyer.dto";

export const LawyerFormSchema = LawyerDTOSchema.extend({
  photo: z.file("File uploading error").or(
    z.object({
      url: z.string(),
      fileName: z.string(),
    })
  ),
});

export type LawyerFormValues = z.infer<typeof LawyerFormSchema>;
