"use client";

import { FormProvider } from "react-hook-form";

import { ProfileForm } from "@entity/profile";

import {
  useUpdateProfileForm,
  UseUpdateProfileFormProps,
} from "../model/useUpdateProfileForm";

export type UpdateProfileFormProps = UseUpdateProfileFormProps;

export const UpdateProfileForm: React.FC<UpdateProfileFormProps> = ({
  initialValues,
}) => {
  const { methods, ...rest } = useUpdateProfileForm({ initialValues });

  return (
    <FormProvider {...methods}>
      <ProfileForm {...rest} />
    </FormProvider>
  );
};
