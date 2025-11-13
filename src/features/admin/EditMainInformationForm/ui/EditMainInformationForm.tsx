"use client";

import { FormProvider } from "react-hook-form";

import { MainInformation } from "./MainInformation";
import { MainInformationAddress } from "./MainInformationAddress";
import { MainInformationSchedule } from "./MainInformationSchedule";
import { useEditMainInformationForm } from "../model/useEditMainInformationForm";

export const EditMainInformationForm = () => {
  const { methods, onSubmit } = useEditMainInformationForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <MainInformation />
        <MainInformationAddress />
        <MainInformationSchedule />
      </form>
    </FormProvider>
  );
};
