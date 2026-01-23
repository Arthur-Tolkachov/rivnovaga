import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  changePassword,
  PasswordFormSchema,
  PasswordFormValues,
} from "@entity/password";
import { notify } from "@shared/lib/toastr";

const DEFAULT_VALUES = {
  password: "",
  confirmPassword: "",
};

export const useChangePasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const methods = useForm<PasswordFormValues>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(PasswordFormSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (values) => {
    try {
      setIsLoading(true);
      const { redirectTo } = await changePassword(values);

      notify.success("Пароль змiнено успiшно");
      router.push(redirectTo);
    } catch (error) {
      console.error(error);
      notify.error("Пароль не змiнено. Спробуйте ще раз.");
    } finally {
      setIsLoading(false);
    }
  });

  return {
    isLoading,
    methods,
    onSubmit,
  };
};
