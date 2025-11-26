import api from "@shared/lib/axios";

import { UpdateHeroSectionDTO } from "./dto";
import { HeroModel } from "../model/model";

export const getHero = async () => {
  const data = await api.get<HeroModel>("/hero");

  return data;
};

export const editHero = async (values: UpdateHeroSectionDTO) => {
  const data = await api.put<UpdateHeroSectionDTO, HeroModel>("/hero", values);

  return data;
};
