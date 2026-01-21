import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { ContactUsFormSchema, ContactUsFormValues } from "@entity/contactUs";
import { notify } from "@shared/lib/toastr";

const DEFAULT_VALUES = {
  name: "",
  phone: "",
  message: "",
};

export const useSendMessageForm = (onSuccess?: VoidFunction) => {
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<ContactUsFormValues>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(ContactUsFormSchema),
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = handleSubmit(async (values) => {
    try {
      setIsLoading(true);

      await fetch("/api/send_application", {
        method: "POST",
        body: JSON.stringify(values),
      });

      notify.success(
        "Ваше повiдомлення успiшно вiдправлено. Скоро ми з вами зв'яжемося.",
      );

      if (onSuccess) {
        onSuccess();
      }

      reset(DEFAULT_VALUES);
    } catch (error) {
      console.error(error);
      notify.error("Сталася помилка при вiдправленнi повiдомлення.");
    } finally {
      setIsLoading(false);
    }
  });

  return {
    methods,
    isLoading,
    onSubmit,
  };
};
