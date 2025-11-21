import api from "@shared/lib/axios";

import { OrganizationFullModel } from "./model";

export const getFullOrganization = async () => {
  const data = await api.get<OrganizationFullModel>("/organization");

  return data;
};

export const editOrganization = async (values: FormData) => {
  const data = await api.put<FormData, OrganizationFullModel>(
    "/organization",
    values,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};
