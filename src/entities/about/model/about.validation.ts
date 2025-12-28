import z from "zod";

import { AboutDTOSchema } from "./about.dto";

export const AboutFormSchema = z.object({
  about: AboutDTOSchema,
});

export type AboutFormValues = z.infer<typeof AboutFormSchema>;
