import z from "zod";

import { AboutPracticeDTOSchema } from "./aboutPractice.dto";

export const AboutPracticeFormSchema = AboutPracticeDTOSchema;

export type AboutPracticeFormValues = z.infer<typeof AboutPracticeFormSchema>;
