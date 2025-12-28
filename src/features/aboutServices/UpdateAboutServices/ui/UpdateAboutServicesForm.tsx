"use client";

import { FormProvider } from "react-hook-form";

import { AboutServicesForm } from "@entity/aboutServices";

import {
  useUpdateAboutServicesForm,
  UseUpdateAboutServicesFormProps,
} from "../model/useUpdateAboutServicesForm";

export type UpdateAboutServicesFormProps = UseUpdateAboutServicesFormProps;

export const UpdateAboutServicesForm: React.FC<
  UpdateAboutServicesFormProps
> = ({ initialValues }) => {
  const { methods, ...rest } = useUpdateAboutServicesForm({
    initialValues,
  });

  return (
    <FormProvider {...methods}>
      <AboutServicesForm {...rest} />
    </FormProvider>
  );
};
