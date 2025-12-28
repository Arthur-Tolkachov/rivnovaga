import z from "zod";

import { AboutServicesDTOSchema } from "./aboutServices.dto";

export const AboutServicesFormSchema = AboutServicesDTOSchema;

export type AboutServicesFormValues = z.infer<typeof AboutServicesFormSchema>;
