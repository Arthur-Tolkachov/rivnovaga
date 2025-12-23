import z from "zod";

import { UpdateProfileDTOSchema } from "./updateProfile.dto";

export const UpdateProfileFormSchema = UpdateProfileDTOSchema.extend({
  logo: z.file("File uploading error").or(
    z.object({
      url: z.string(),
      fileName: z.string(),
    })
  ),
});

export type UpdateProfileFormValues = z.infer<typeof UpdateProfileFormSchema>;
