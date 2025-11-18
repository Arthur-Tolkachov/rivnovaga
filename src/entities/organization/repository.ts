import api from "@shared/lib/axios";

import { OrganizationFullModel } from "./model";

export const getFullOrganization = async () => {
  const data = await api.get<OrganizationFullModel>("/organization");

  return data;
};
