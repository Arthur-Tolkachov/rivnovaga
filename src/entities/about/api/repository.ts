import api from "@shared/lib/axios";

import { AboutModel } from "../model";
import { UpdateAboutSectionDTO } from "./dto";

export const getAbout = async () => {
  const data = await api.get<AboutModel>("/about");

  return data;
};

export const editAbout = async (values: UpdateAboutSectionDTO) => {
  const data = await api.put<UpdateAboutSectionDTO, AboutModel>(
    "/about",
    values
  );

  return data;
};
