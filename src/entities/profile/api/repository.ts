import api from "@shared/lib/axios";

import { UpdateProfileDTO } from "./dto";
import { ProfileModel } from "../model/model";

export const getProfile = async () => {
  const data = await api.get<ProfileModel>("/profile");

  return data;
};

export const editProfile = async (values: UpdateProfileDTO) => {
  const data = await api.put<UpdateProfileDTO, ProfileModel>(
    "/profile",
    values
  );

  return data;
};
