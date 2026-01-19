"use client";

import { FormProvider } from "react-hook-form";

import { ContactUsForm } from "@entity/contactUs";

import { useSendMessageForm } from "../model/useSendMessageForm";

export const SendMessageForm = () => {
  const { methods, isLoading, onSubmit } = useSendMessageForm();

  return (
    <FormProvider {...methods}>
      <ContactUsForm isLoading={isLoading} onSubmit={onSubmit} />
    </FormProvider>
  );
};
