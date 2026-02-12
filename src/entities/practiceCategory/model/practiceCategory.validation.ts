import z from "zod";

import { PracticeCategoryDTOSchema } from "./practiceCategory.dto";

export const PracticeCategoryFormSchema = PracticeCategoryDTOSchema.extend({
  cover: z.file("File uploading error").or(
    z.object({
      url: z.string(),
      fileName: z.string(),
    }),
  ),
  practices: z.array(z.string()).nullable(),
});

export type PracticeCategoryFormValues = z.infer<
  typeof PracticeCategoryFormSchema
>;
