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
} from "@entity/service";
import { FileDto, uploadFile } from "@entity/upload";
import { notify } from "@shared/lib/toastr";

export interface UseUpdateServiceFormProps {
  initialValues: ServiceModel;
}

export const useUpdateServiceForm = ({
  initialValues,
}: UseUpdateServiceFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<ServiceFormValues>({
    defaultValues: initialValues,
    reValidateMode: "onChange",
    resolver: zodResolver(ServiceFormSchema),
  });

  const { handleSubmit } = methods;

  const onCancel = useCallback(() => {
    router.push("/admin/services");
  }, []);

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await deleteService(initialValues.id);
      notify.success("Послугу успішно видалено");
      router.push("/admin/services");
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

      await updateService(initialValues.id, {
        cover: coverDto as FileDto,
        ...values,
      });

      notify.success("Послугу успішно оновлено");
      router.push("/admin/services");
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
