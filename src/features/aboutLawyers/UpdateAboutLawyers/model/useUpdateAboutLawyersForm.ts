import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  AboutLawyersFormSchema,
  AboutLawyersFormValues,
  AboutLawyersModel,
  updateAboutLawyers,
} from "@entity/aboutLawyers";
import { notify } from "@shared/lib/toastr";

export interface UseUpdateAboutLawyersForm {
  initialValues: AboutLawyersModel;
}

export const useUpdateAboutLawyersForm = ({
  initialValues,
}: UseUpdateAboutLawyersForm) => {
  const [isLoading, setIsLoading] = useState(false);

  const [defaultValues, setDefaultValues] =
    useState<AboutLawyersModel>(initialValues);

  const methods = useForm<AboutLawyersFormValues>({
    defaultValues,
    reValidateMode: "onChange",
    resolver: zodResolver(AboutLawyersFormSchema),
  });

  const { handleSubmit, reset } = methods;

  const onCancel = () => {
    reset(defaultValues);
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      setIsLoading(true);

      const response = await updateAboutLawyers(values);

      setDefaultValues(response);
      reset(response);
      notify.success("Секцiю про адвокатiв успішно оновлено");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  });

  return {
    methods,
    isLoading,
    onCancel,
    onSubmit,
  };
};
