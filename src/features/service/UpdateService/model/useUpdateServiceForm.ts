import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { PracticeModel } from "@entity/practice";
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
  practices: PracticeModel[];
}

export const useUpdateServiceForm = ({
  initialValues,
  practices,
}: UseUpdateServiceFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<ServiceFormValues>({
    defaultValues: initialValues,
    reValidateMode: "onChange",
    resolver: zodResolver(ServiceFormSchema),
  });

  const { handleSubmit } = methods;

  const practicesDropdownOptions = useMemo(
    () =>
      practices.map((practice) => ({
        label: practice.title,
        value: practice.id,
      })),
    [practices],
  );

  const onCancel = useCallback(() => {
    router.push("/admin/services");
  }, [router]);

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await deleteService(initialValues.slug);
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
          `services/${initialValues.id}`,
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
      if (error instanceof Error) {
        notify.error(error.message);
      }

      console.error(error);
    } finally {
      setIsLoading(false);
    }
  });

  return {
    methods,
    practicesDropdownOptions,
    isLoading,
    onDelete,
    onCancel,
    onSubmit,
  };
};
