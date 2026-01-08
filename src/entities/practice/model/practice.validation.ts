import z from "zod";

import { PracticeDTOSchema } from "./practice.dto";

export const PracticeFormSchema = PracticeDTOSchema.extend({
  file: z.file("File uploading error").or(
    z.object({
      url: z.string(),
      fileName: z.string(),
    })
  ),
  services: z.array(z.string()).nullable(),
});

export type PracticeFormValues = z.infer<typeof PracticeFormSchema>;
