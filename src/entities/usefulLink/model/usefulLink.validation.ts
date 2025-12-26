import z from "zod";

import { UsefulLinkDTOSchema } from "./usefulLink.dto";

export const UsefulLinkFormSchema = UsefulLinkDTOSchema;

export type UsefulLinkFormValues = z.infer<typeof UsefulLinkFormSchema>;
