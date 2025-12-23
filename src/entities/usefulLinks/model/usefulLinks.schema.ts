import z from "zod";

import { UpdateUsefulLinksDTOSchema } from "./usefulLinks.dto";

export const UpdateUsefulLinksFormSchema = z.object({
  usefulLinks: UpdateUsefulLinksDTOSchema,
});

export type UpdateUsefulLinksFormValues = z.infer<
  typeof UpdateUsefulLinksFormSchema
>;
