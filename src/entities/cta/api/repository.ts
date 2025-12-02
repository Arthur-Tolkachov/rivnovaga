import api from "@shared/lib/axios";

import { CtaModel } from "../model";
import { UpdateCtaSectionDTO } from "./dto";

export const getCta = async () => {
  const data = await api.get<CtaModel>("/cta");

  return data;
};

export const editCta = async (values: UpdateCtaSectionDTO) => {
  const data = await api.put<UpdateCtaSectionDTO, CtaModel>("/cta", values);

  return data;
};
