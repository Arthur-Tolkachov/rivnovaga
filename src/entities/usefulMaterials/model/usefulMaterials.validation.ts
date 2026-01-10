import z from "zod";

import { UsefulMaterialsDTOSchema } from "./usefulMaterials.dto";

export const UsefulMaterialsFormSchema = UsefulMaterialsDTOSchema;

export type UsefulMaterialsFormValues = z.infer<
  typeof UsefulMaterialsFormSchema
>;
