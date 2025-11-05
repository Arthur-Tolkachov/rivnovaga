"use client";

import { FormProvider } from "react-hook-form";

import { useMainInformationForm } from "./useMainInformationForm";
import TextField from "../../fields/TextField";

export function MainInformationForm() {
  const { methods, onSubmit } = useMainInformationForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <TextField name="name" label="Назва компанії" />
      </form>
    </FormProvider>
  );
}
