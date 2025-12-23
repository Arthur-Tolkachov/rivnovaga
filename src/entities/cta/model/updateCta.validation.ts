import z from "zod";

import { UpdateCtaDTOSchema } from "./updateCta.dto";

export const UpdateCtaFormSchema = UpdateCtaDTOSchema;

export type UpdateCtaFormValues = z.infer<typeof UpdateCtaFormSchema>;
