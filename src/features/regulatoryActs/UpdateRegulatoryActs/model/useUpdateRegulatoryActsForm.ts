import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import {
  RegulatoryActModel,
  RegulatoryActsFormSchema,
  RegulatoryActsFormValues,
  updateRegulatoryActs,
} from "@entity/regulatoryActs";
import { notify } from "@shared/lib/toastr";

export interface UseUpdateRegulatoryActsFormProps {
  initialValues: RegulatoryActModel[];
}

export const useUpdateRegulatoryActsForm = ({
  initialValues,
}: UseUpdateRegulatoryActsFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [defaultValues, setDefaultValues] = useState<RegulatoryActsFormValues>({
    regulatoryActs: initialValues,
  });

  const methods = useForm<RegulatoryActsFormValues>({
    defaultValues,
    reValidateMode: "onChange",
    resolver: zodResolver(RegulatoryActsFormSchema),
  });

  const { handleSubmit, reset } = methods;

  const onCancel = useCallback(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  const onSubmit = handleSubmit(async ({ regulatoryActs }) => {
    try {
      setIsLoading(true);

      const response = await updateRegulatoryActs(regulatoryActs);

      setDefaultValues({ regulatoryActs: response });
      reset({ regulatoryActs: response });
      notify.success("Нормативно-правовi акти успішно оновлено");
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
