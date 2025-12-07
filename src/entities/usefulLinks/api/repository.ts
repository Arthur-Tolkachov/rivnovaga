import api from "@shared/lib/axios";

import { UpdateUsefulLinksDTO } from "./dto";
import { UsefulLinkBlockModel } from "../model";

export const getUsefulLinks = async () => {
  const data = await api.get<UsefulLinkBlockModel>("/useful_links");

  return data;
};

export const editUsefulLinks = async (values: UpdateUsefulLinksDTO) => {
  const data = await api.put<UpdateUsefulLinksDTO, UsefulLinkBlockModel>(
    "/useful_links",
    values
  );

  return data;
};
