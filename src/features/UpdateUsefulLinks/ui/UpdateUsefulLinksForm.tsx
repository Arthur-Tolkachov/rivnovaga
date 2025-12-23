"use client";

import { FormProvider } from "react-hook-form";

import { UsefulLinksForm } from "@entity/usefulLinks";

import {
  useUpdateUsefulLinks,
  UseUpdateUsefulLinksProps,
} from "../model/useUpdateUsefulLinks";

export type UpdateUsefulLinksFormProps = UseUpdateUsefulLinksProps;

export const UpdateUsefulLinksForm: React.FC<UpdateUsefulLinksFormProps> = ({
  initialValues,
}) => {
  const { methods, ...rest } = useUpdateUsefulLinks({ initialValues });

  return (
    <FormProvider {...methods}>
      <UsefulLinksForm {...rest} />
    </FormProvider>
  );
};
