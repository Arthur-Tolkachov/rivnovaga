"use client";

import { FormProvider } from "react-hook-form";

import { PasswordForm } from "@entity/password";

import { useChangePasswordForm } from "../model/useChangePasswordForm";

export const ChangePasswordForm = () => {
  const { methods, ...rest } = useChangePasswordForm();

  return (
    <FormProvider {...methods}>
      <PasswordForm {...rest} />
    </FormProvider>
  );
};
