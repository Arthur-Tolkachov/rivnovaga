import { Organization } from "@prisma/client";

import api from "@shared/lib/axios";

export const getOrganization = async () => {
  const data = await api.get<Organization>("/organization");

  return data;
};
