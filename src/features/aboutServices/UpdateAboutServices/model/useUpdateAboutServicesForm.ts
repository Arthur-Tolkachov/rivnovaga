import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  AboutServicesFormSchema,
  AboutServicesFormValues,
  AboutServicesModel,
  updateAboutServices,
} from "@entity/aboutServices";
import { notify } from "@shared/lib/toastr";

export interface UseUpdateAboutServicesFormProps {
  initialValues: AboutServicesModel;
}

export const useUpdateAboutServicesForm = ({
  initialValues,
}: UseUpdateAboutServicesFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [defaultValues, setDefaultValues] =
    useState<AboutServicesModel>(initialValues);

  const methods = useForm<AboutServicesFormValues>({
    defaultValues,
    reValidateMode: "onChange",
    resolver: zodResolver(AboutServicesFormSchema),
  });

  const { handleSubmit, reset } = methods;

  const onCancel = () => {
    reset(defaultValues);
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      setIsLoading(true);

      const response = await updateAboutServices(values);

      setDefaultValues(response);
      reset(response);
      notify.success("Сторiнку послуг успішно оновлено");
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
