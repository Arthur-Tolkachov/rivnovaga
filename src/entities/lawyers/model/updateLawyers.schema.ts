import z from "zod";

import { UpdateLawyersDTOSchema } from "./updateLawyers.dto";

export const UpdateLawyersFormSchema = z.object({
  about_lawyers: UpdateLawyersDTOSchema.shape.about_lawyers,
  lawyers: UpdateLawyersDTOSchema.shape.lawyers.element.extend({
    photo: z
      .file("File uploading error")
      .or(
        z.object({
          url: z.string(),
          fileName: z.string(),
        })
      )
      .array(),
  }),
});

export type UpdateLawyersFormValues = z.infer<typeof UpdateLawyersFormSchema>;
