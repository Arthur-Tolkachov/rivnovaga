import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

import {
  AboutModel,
  updateAbout,
  UpdateAboutFormSchema,
  UpdateAboutFormValues,
} from "@entity/about";
import { notify } from "@shared/lib/toastr";

export interface UseUpdateAboutSectionFormProps {
  initialValues: AboutModel[];
}

export const useUpdateAboutSectionForm = ({
  initialValues,
}: UseUpdateAboutSectionFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const [defaultValues, setDefaultValues] = useState<UpdateAboutFormValues>({
    about: initialValues,
  });

  const methods = useForm({
    defaultValues,
    reValidateMode: "onChange",
    resolver: zodResolver(UpdateAboutFormSchema),
  });

  const { handleSubmit, control, reset } = methods;

  const { fields } = useFieldArray({
    name: "about",
    control,
  });

  const onCancel = useCallback(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  const onSubmit = handleSubmit(async ({ about: values }) => {
    try {
      setIsLoading(true);

      const response = await updateAbout(values);

      setDefaultValues({ about: response });
      reset({ about: response });
      notify.success('Секцiю "Про нас" успішно оновлено');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  });

  return {
    fields,
    isLoading,
    methods,
    onCancel,
    onSubmit,
  };
};
