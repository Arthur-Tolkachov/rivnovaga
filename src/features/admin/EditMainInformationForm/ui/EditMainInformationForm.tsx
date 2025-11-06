"use client";

import { FormProvider } from "react-hook-form";

import { TextField } from "@shared/ui/fields/TextField";

import { useEditMainInformationForm } from "../model/useEditMainInformationForm";

export const EditMainInformationForm = () => {
  const { methods, onSubmit } = useEditMainInformationForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <TextField name="name" label="Назва компанії" />
      </form>
    </FormProvider>
  );
};
