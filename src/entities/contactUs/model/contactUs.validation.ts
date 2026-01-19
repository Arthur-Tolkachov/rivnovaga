import z from "zod";

import { ContactUsDTOSchema } from "./contactUs.dto";

export const ContactUsFormSchema = ContactUsDTOSchema;

export type ContactUsFormValues = z.infer<typeof ContactUsFormSchema>;
