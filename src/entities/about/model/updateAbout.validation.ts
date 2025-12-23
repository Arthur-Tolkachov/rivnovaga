import z from "zod";

import { UpdateAboutDTOSchema } from "./updateAbout.dto";

export const UpdateAboutFormSchema = z.object({
  about: UpdateAboutDTOSchema,
});

export type UpdateAboutFormValues = z.infer<typeof UpdateAboutFormSchema>;
