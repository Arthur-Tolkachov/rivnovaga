"use client";

import { FormProvider } from "react-hook-form";

import { PracticeForm } from "@entity/practice";

import {
  useCreatePracticeForm,
  UseCreatePracticeFormProps,
} from "../model/useCreatePracticeForm";

export type CreatePracticeForm = UseCreatePracticeFormProps;

export const CreatePracticeForm: React.FC<CreatePracticeForm> = ({
  services,
  practiceCategories,
}) => {
  const { methods, ...rest } = useCreatePracticeForm({
    services,
    practiceCategories,
  });

  return (
    <FormProvider {...methods}>
      <PracticeForm {...rest} />
    </FormProvider>
  );
};
