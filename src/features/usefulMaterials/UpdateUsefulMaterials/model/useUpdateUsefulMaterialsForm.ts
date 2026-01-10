import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  updateUsefulMaterials,
  UsefulMaterialsFormSchema,
  UsefulMaterialsFormValues,
  UsefulMaterialsModel,
} from "@entity/usefulMaterials";
import { notify } from "@shared/lib/toastr";

export interface UseUpdateUsefulMaterialsFormProps {
  initialValues: UsefulMaterialsModel;
}

export const useUpdateUsefulMaterialsForm = ({
  initialValues,
}: UseUpdateUsefulMaterialsFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const [defaultValues, setDefaultValues] =
    useState<UsefulMaterialsModel>(initialValues);

  const methods = useForm<UsefulMaterialsFormValues>({
    defaultValues,
    reValidateMode: "onChange",
    resolver: zodResolver(UsefulMaterialsFormSchema),
  });

  const { handleSubmit, reset } = methods;

  const onCancel = () => {
    reset(defaultValues);
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      setIsLoading(true);

      const response = await updateUsefulMaterials(values);

      setDefaultValues(response);
      reset(response);
      notify.success("Секцiю корисних матерiалiв успішно оновлено");
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
