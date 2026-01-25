"use client";

import { FormProvider } from "react-hook-form";

import { ContactUsForm } from "@entity/contactUs";

import { useSendMessageForm } from "../model/useSendMessageForm";

interface SendMessageFormProps {
  onSuccess?: () => void;
  onCancel?: VoidFunction;
}

export const SendMessageForm: React.FC<SendMessageFormProps> = ({
  onSuccess,
  onCancel,
}) => {
  const { methods, isLoading, onSubmit } = useSendMessageForm(onSuccess);

  return (
    <FormProvider {...methods}>
      <ContactUsForm
        isLoading={isLoading}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </FormProvider>
  );
};
