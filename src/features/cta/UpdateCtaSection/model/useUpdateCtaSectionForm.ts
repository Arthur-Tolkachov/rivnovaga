import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  CtaModel,
  updateCta,
  UpdateCtaFormSchema,
  UpdateCtaFormValues,
} from "@entity/cta";
import { notify } from "@shared/lib/toastr";

export interface UseUpdateCtaSectionFormProps {
  initialValues: CtaModel;
}

export const useUpdateCtaSectionForm = ({
  initialValues,
}: UseUpdateCtaSectionFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const [defaultValues, setDefaultValues] = useState<CtaModel>(initialValues);

  const methods = useForm<UpdateCtaFormValues>({
    defaultValues,
    reValidateMode: "onChange",
    resolver: zodResolver(UpdateCtaFormSchema),
  });

  const { handleSubmit, reset } = methods;

  const onCancel = () => {
    reset(defaultValues);
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      setIsLoading(true);

      const response = await updateCta(values);

      setDefaultValues(response);
      reset(response);
      notify.success("Секцiю заклику до дії успішно оновлено");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  });

  return {
    methods,
    isLoading,
    onSubmit,
    onCancel,
  };
};
