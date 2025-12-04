import { HeroModel, UpdateHeroSectionDTO } from "@entity/hero";

export const createDtoFromData = ({
  hero,
}: HeroModel): UpdateHeroSectionDTO => ({
  hero,
});
