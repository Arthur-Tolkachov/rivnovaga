import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  AboutPracticeModel,
  AboutPracticeFormSchema,
  AboutPracticeFormValues,
  updateAboutPractice,
} from "@entity/aboutPractice";
import { notify } from "@shared/lib/toastr";

export interface UseUpdateAboutPracticeFormProps {
  initialValues: AboutPracticeModel;
}

export const useUpdateAboutPracticeForm = ({
  initialValues,
}: UseUpdateAboutPracticeFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [defaultValues, setDefaultValues] =
    useState<AboutPracticeModel>(initialValues);

  const methods = useForm<AboutPracticeFormValues>({
    defaultValues,
    reValidateMode: "onChange",
    resolver: zodResolver(AboutPracticeFormSchema),
  });

  const { handleSubmit, reset } = methods;

  const onCancel = () => {
    reset(defaultValues);
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      setIsLoading(true);

      const response = await updateAboutPractice(values);

      setDefaultValues(response);
      reset(response);
      notify.success("Сторiнку практики успішно оновлено");
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
