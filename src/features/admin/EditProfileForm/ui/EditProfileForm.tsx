"use client";

import { FormProvider } from "react-hook-form";

import { ProfileForm } from "@entity/profile";

import { useEditProfileForm } from "../model/useEditProfileForm";

export const EditProfileForm = () => {
  const { methods, ...rest } = useEditProfileForm();

  return (
    <FormProvider {...methods}>
      <ProfileForm {...rest} />
    </FormProvider>
  );
};
