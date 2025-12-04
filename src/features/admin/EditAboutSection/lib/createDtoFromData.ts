import { AboutModel, UpdateAboutSectionDTO } from "@entity/about";

export const createDtoFromData = ({
  about,
}: AboutModel): UpdateAboutSectionDTO => ({
  about,
});
