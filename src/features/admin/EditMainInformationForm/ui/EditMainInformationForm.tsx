"use client";

import { FormProvider } from "react-hook-form";

import { ActionButtons } from "./ActionButtons";
import { MainInformation } from "./MainInformation";
import { MainInformationAddress } from "./MainInformationAddress";
import { MainInformationSchedule } from "./MainInformationSchedule";
import { useEditMainInformationForm } from "../model/useEditMainInformationForm";

export const EditMainInformationForm = () => {
  const { methods, isFetching, onReset, onSubmit } =
    useEditMainInformationForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <MainInformation isFetching={isFetching} />
          <MainInformationAddress isFetching={isFetching} />
          <MainInformationSchedule isFetching={isFetching} />
        </div>

        <ActionButtons isFetching={isFetching} onReset={onReset} />
      </form>
    </FormProvider>
  );
};
