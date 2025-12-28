import z from "zod";

import { CtaDTOSchema } from "./cta.dto";

export const CtaFormSchema = CtaDTOSchema;

export type CtaFormValues = z.infer<typeof CtaFormSchema>;
