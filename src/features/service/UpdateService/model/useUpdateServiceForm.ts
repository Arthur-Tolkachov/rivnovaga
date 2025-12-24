import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import {
  deleteService,
  ServiceFormSchema,
  ServiceFormValues,
  ServiceModel,
  updateService,
} from "@entity/services";
import { FileDto, uploadFile } from "@entity/upload";
import { notify } from "@shared/lib/toastr";

export interface UseUpdateServiceFormProps {
  initialValues: ServiceModel;
}

export const useUpdateServiceForm = ({
  initialValues,
}: UseUpdateServiceFormProps) => {
  const route = useRouter();
  const [defaultValues, setDefaultValues] =
    useState<ServiceModel>(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<ServiceFormValues>({
    defaultValues,
    reValidateMode: "onChange",
    resolver: zodResolver(ServiceFormSchema),
  });

  const { reset, handleSubmit } = methods;

  const onCancel = useCallback(() => {
    route.push("/admin/services");
  }, []);

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await deleteService(initialValues.id);
      notify.success("Послугу успішно видалено");
      route.push("/admin/services");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = handleSubmit(async ({ cover, ...values }) => {
    try {
      setIsLoading(true);

      let coverDto = cover;

      if (cover instanceof File) {
        const response = await uploadFile(
          cover,
          `services/${initialValues.id}`
        );

        if (!response) {
          throw new Error("File uploading error");
        }

        coverDto = response;
      }

      const response = await updateService(initialValues.id, {
        cover: coverDto as FileDto,
        ...values,
      });

      const updatedService = { ...defaultValues, ...response };
      setDefaultValues(updatedService);
      reset(updatedService);
      notify.success("Послугу успішно оновлено");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  });

  return {
    methods,
    isLoading,
    onDelete,
    onCancel,
    onSubmit,
  };
};
