"use client";

import { FormProvider } from "react-hook-form";

import { AboutLawyersForm } from "@entity/aboutLawyers";

import {
  UseUpdateAboutLawyersFormProps,
  useUpdateAboutLawyersForm,
} from "../model/useUpdateAboutLawyersForm";

export type UpdateAboutLawyersFormProps = UseUpdateAboutLawyersFormProps;

export const UpdateAboutLawyersForm: React.FC<UpdateAboutLawyersFormProps> = ({
  initialValues,
}) => {
  const { methods, ...rest } = useUpdateAboutLawyersForm({ initialValues });

  return (
    <FormProvider {...methods}>
      <AboutLawyersForm {...rest} />
    </FormProvider>
  );
};
