import z from "zod";

import { AboutLawyersDTOSchema } from "./aboutLawyers.dto";

export const AboutLawyersFormSchema = AboutLawyersDTOSchema;

export type AboutLawyersFormValues = z.infer<typeof AboutLawyersFormSchema>;
