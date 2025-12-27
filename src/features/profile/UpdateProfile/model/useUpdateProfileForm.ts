import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import {
  updateProfile,
  ProfileModel,
  UpdateProfileFormSchema,
  UpdateProfileFormValues,
} from "@entity/profile";
import { FileDto, uploadFile } from "@entity/upload";
import { notify } from "@shared/lib/toastr";

export interface UseUpdateProfileFormProps {
  initialValues: ProfileModel;
}

export const useUpdateProfileForm = ({
  initialValues,
}: UseUpdateProfileFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [defaultValues, setDefaultValues] =
    useState<ProfileModel>(initialValues);

  const methods = useForm<UpdateProfileFormValues>({
    defaultValues,
    reValidateMode: "onChange",
    resolver: zodResolver(UpdateProfileFormSchema),
  });

  const { reset, handleSubmit } = methods;

  const onCancel = useCallback(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  const onSubmit = handleSubmit(async ({ logo, ...values }) => {
    try {
      setIsLoading(true);
      let logoDto = logo;

      if (logo instanceof File) {
        const response = await uploadFile(logo, "logo");

        if (!response) {
          throw new Error("File uploading error");
        }

        logoDto = response;
      }

      const response = await updateProfile({
        logo: logoDto as FileDto,
        ...values,
      });

      setDefaultValues(response);
      reset(response);
      notify.success("Основну iнформацію успішно оновлено");
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
