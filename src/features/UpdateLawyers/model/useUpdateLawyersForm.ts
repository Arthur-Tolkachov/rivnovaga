import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { LawyersModel, updateLawyers } from "@entity/lawyers";
import { uploadFile } from "@entity/upload";
import { notify } from "@shared/lib/toastr";

import { EditLawyersFormSchema, EditLawyersFormValues } from "./validation";

export interface UseUpdateLawyersFormProps {
  initialValues: LawyersModel;
}

export const useUpdateLawyersForm = ({
  initialValues,
}: UseUpdateLawyersFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const [defaultValues, setDefaultValues] =
    useState<LawyersModel>(initialValues);

  const methods = useForm<EditLawyersFormValues>({
    defaultValues,
    reValidateMode: "onChange",
    resolver: zodResolver(EditLawyersFormSchema),
  });

  const { handleSubmit, reset } = methods;

  const onReset = () => {
    reset(defaultValues);
  };

  const onSubmit = handleSubmit(async ({ lawyers, ...values }) => {
    try {
      setIsLoading(true);

      const preparedLawyers = await Promise.all(
        lawyers.map(async ({ photo, ...rest }) => {
          if (photo instanceof File) {
            const photoDto = await uploadFile(photo, "lawyers");

            if (!photoDto) {
              throw new Error("File uploading error");
            }

            return { photo: photoDto, ...rest };
          }

          return { photo, ...rest };
        })
      );

      const response = await updateLawyers({
        lawyers: preparedLawyers,
        ...values,
      });

      setDefaultValues(response);
      reset(response);
      notify.success("Секцiю 'Адвокати' успішно оновлено");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  });

  return {
    isLoading,
    methods,
    onReset,
    onSubmit,
  };
};
