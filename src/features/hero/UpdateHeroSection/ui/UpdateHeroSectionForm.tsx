"use client";

import { FormProvider } from "react-hook-form";

import { HeroSectionForm } from "@entity/hero";

import {
  useUpdateHeroSectionForm,
  UseUpdateHeroSectionFormProps,
} from "../model/useUpdateHeroSectionForm";

export type UpdateHeroSectionFormProps = UseUpdateHeroSectionFormProps;

export const UpdateHeroSectionForm: React.FC<UpdateHeroSectionFormProps> = ({
  initialValues,
}) => {
  const { methods, ...rest } = useUpdateHeroSectionForm({ initialValues });

  return (
    <FormProvider {...methods}>
      <HeroSectionForm {...rest} />
    </FormProvider>
  );
};
