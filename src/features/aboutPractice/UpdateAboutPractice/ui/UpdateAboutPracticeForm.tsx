"use client";

import { FormProvider } from "react-hook-form";

import { AboutPracticeForm } from "@entity/aboutPractice";

import {
  useUpdateAboutPracticeForm,
  UseUpdateAboutPracticeFormProps,
} from "../model/useUpdateAboutPracticeForm";

export type UpdateAboutPracticeFormProps = UseUpdateAboutPracticeFormProps;

export const UpdateAboutPracticeForm: React.FC<
  UpdateAboutPracticeFormProps
> = ({ initialValues }) => {
  const { methods, ...rest } = useUpdateAboutPracticeForm({
    initialValues,
  });

  return (
    <FormProvider {...methods}>
      <AboutPracticeForm {...rest} />
    </FormProvider>
  );
};
