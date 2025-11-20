import api from "@shared/lib/axios";

import { UpdateMainInformationDTO } from "./api/dto";
import { OrganizationFullModel } from "./model";

export const getFullOrganization = async () => {
  const data = await api.get<OrganizationFullModel>("/organization");

  return data;
};

export const editOrganization = async (values: UpdateMainInformationDTO) => {
  const data = await api.put<UpdateMainInformationDTO, OrganizationFullModel>(
    "/organization",
    values
  );

  return data;
};
