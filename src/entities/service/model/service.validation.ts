import z from "zod";

import { ServiceDTOSchema } from "./service.dto";

export const ServiceFormSchema = ServiceDTOSchema.extend({
  cover: z.file("File uploading error").or(
    z.object({
      url: z.string(),
      fileName: z.string(),
    })
  ),
  practices: z.array(z.string()),
});

export type ServiceFormValues = z.infer<typeof ServiceFormSchema>;
