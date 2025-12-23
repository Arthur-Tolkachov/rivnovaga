"use client";

import { FormProvider } from "react-hook-form";

import { AboutSectionForm } from "@entity/about";

import {
  useUpdateAboutSectionForm,
  UseUpdateAboutSectionFormProps,
} from "../model/useUpdateAboutSectionForm";

export type UpdateAboutSectionFormProps = UseUpdateAboutSectionFormProps;

export const UpdateAboutSectionForm: React.FC<UpdateAboutSectionFormProps> = ({
  initialValues,
}) => {
  const { methods, ...rest } = useUpdateAboutSectionForm({ initialValues });

  return (
    <FormProvider {...methods}>
      <AboutSectionForm {...rest} />
    </FormProvider>
  );
};
