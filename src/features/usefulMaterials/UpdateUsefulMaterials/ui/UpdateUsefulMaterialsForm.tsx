"use client";

import { FormProvider } from "react-hook-form";

import { UsefulMaterialsForm } from "@entity/usefulMaterials";

import {
  useUpdateUsefulMaterialsForm,
  UseUpdateUsefulMaterialsFormProps,
} from "../model/useUpdateUsefulMaterialsForm";

export type UpdateUsefulMaterialsFormProps = UseUpdateUsefulMaterialsFormProps;

export const UpdateUsefulMaterialsForm: React.FC<
  UpdateUsefulMaterialsFormProps
> = ({ initialValues }) => {
  const { methods, ...rest } = useUpdateUsefulMaterialsForm({ initialValues });

  return (
    <FormProvider {...methods}>
      <UsefulMaterialsForm {...rest} />
    </FormProvider>
  );
};
