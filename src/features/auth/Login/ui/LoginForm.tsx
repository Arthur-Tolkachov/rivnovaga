"use client";

import { FormProvider } from "react-hook-form";

import { AuthForm } from "@entity/auth";

import { useLoginForm } from "../model/useLoginForm";

export const LoginForm = () => {
  const { methods, ...rest } = useLoginForm();

  return (
    <FormProvider {...methods}>
      <AuthForm {...rest} />
    </FormProvider>
  );
};
