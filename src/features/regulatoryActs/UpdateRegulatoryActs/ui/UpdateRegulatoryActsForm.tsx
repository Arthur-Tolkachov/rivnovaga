"use client";

import { FormProvider } from "react-hook-form";

import { RegulatoryActsForm } from "@entity/regulatoryActs";

import {
  useUpdateRegulatoryActsForm,
  UseUpdateRegulatoryActsFormProps,
} from "../model/useUpdateRegulatoryActsForm";

export type UpdateRegulatoryActsFormProps = UseUpdateRegulatoryActsFormProps;

export const UpdateRegulatoryActsForm: React.FC<
  UpdateRegulatoryActsFormProps
> = ({ initialValues }) => {
  const { methods, ...rest } = useUpdateRegulatoryActsForm({ initialValues });

  return (
    <FormProvider {...methods}>
      <RegulatoryActsForm {...rest} />
    </FormProvider>
  );
};
