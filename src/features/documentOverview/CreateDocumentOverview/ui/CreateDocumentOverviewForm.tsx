"use client";

import { FormProvider } from "react-hook-form";

import { DocumentOverviewForm } from "@entity/documentOverview";

import { useCreateDocumentOverviewForm } from "../model/useCreateDocumentOverviewForm";

export const CreateDocumentOverviewForm = () => {
  const { methods, ...rest } = useCreateDocumentOverviewForm();

  return (
    <FormProvider {...methods}>
      <DocumentOverviewForm {...rest} />
    </FormProvider>
  );
};
