import z from "zod";

import { RegulatoryActsDTOSchema } from "./regulatoryActs.dto";

export const RegulatoryActsFormSchema = z.object({
  regulatoryActs: RegulatoryActsDTOSchema,
});

export type RegulatoryActsFormValues = z.infer<typeof RegulatoryActsFormSchema>;
