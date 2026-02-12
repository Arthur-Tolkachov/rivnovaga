"use client";

import { FormProvider } from "react-hook-form";

import { PracticeCategoryForm } from "@entity/practiceCategory";

import {
  useCreatePracticeCategoryForm,
  UseCreatePracticeCategoryFormProps,
} from "../model/useCreatePracticeCategoryForm";

export type CreatePracticeCategoryFormProps =
  UseCreatePracticeCategoryFormProps;

export const CreatePracticeCategoryForm: React.FC<
  CreatePracticeCategoryFormProps
> = ({ practices }) => {
  const { methods, ...rest } = useCreatePracticeCategoryForm({ practices });

  return (
    <FormProvider {...methods}>
      <PracticeCategoryForm {...rest} />
    </FormProvider>
  );
};
