import { CtaModel, UpdateCtaSectionDTO } from "@entity/cta";

export const createDtoFromData = ({ cta }: CtaModel): UpdateCtaSectionDTO => ({
  cta,
});
