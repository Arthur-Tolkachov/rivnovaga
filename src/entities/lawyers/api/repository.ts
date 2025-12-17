import api from "@shared/lib/axios";

import { LawyersModel } from "../model";
import { UpdateLawyersDTO } from "./dto";

export const getLawyers = async () => {
  const data = await api.get<LawyersModel>("/lawyers");

  return data;
};

export const editLawyers = async (values: UpdateLawyersDTO) => {
  const data = await api.put<UpdateLawyersDTO, LawyersModel>(
    "/lawyers",
    values
  );

  return data;
};
