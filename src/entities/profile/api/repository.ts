import api from "@shared/lib/axios";

import { ProfileModel } from "../model/model";

export const getProfile = async () => {
  const data = await api.get<ProfileModel>("/profile");

  return data;
};

export const editProfile = async (values: FormData) => {
  const data = await api.put<FormData, ProfileModel>("/profile", values, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
