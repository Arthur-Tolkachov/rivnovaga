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
}) => {
  const { methods, servicesDropdownOptions, ...rest } = useCreatePracticeForm({
    services,
  });

  return (
    <FormProvider {...methods}>
      <PracticeForm dropdownOptions={servicesDropdownOptions} {...rest} />
    </FormProvider>
  );
};
