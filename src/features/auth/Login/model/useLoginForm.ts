import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { login, LoginFormSchema, LoginFormValues } from "@entity/auth";
import { notify } from "@shared/lib/toastr";

const DEFAULT_VALUES = {
  email: "",
  password: "",
};

export const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const methods = useForm<LoginFormValues>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(LoginFormSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (values) => {
    try {
      setIsLoading(true);

      const response = await login(values);

      if (response.error) {
        notify.error(response.error);
        return;
      }

      notify.success("Вхiд виконано успiшно");
      router.push(response.redirectTo);
    } catch (error) {
      console.error(error);
      notify.error("Вхід не виконано");
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
