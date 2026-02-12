import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import {
  PracticeFormValues,
  PracticeFormSchema,
  PracticeModel,
  updatePractice,
  deletePractice,
} from "@entity/practice";
import { PracticeCategoryModel } from "@entity/practiceCategory";
import { ServiceModel } from "@entity/service";
import { FileDto, uploadFile } from "@entity/upload";
import { notify } from "@shared/lib/toastr";

export interface UseUpdatePracticeFormProps {
  services: ServiceModel[];
  practiceCategories: PracticeCategoryModel[];
  initialValues: PracticeModel;
}

export const useUpdatePracticeForm = ({
  services,
  practiceCategories,
  initialValues,
}: UseUpdatePracticeFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<PracticeFormValues>({
    defaultValues: initialValues,
    reValidateMode: "onChange",
    resolver: zodResolver(PracticeFormSchema),
  });

  const { handleSubmit } = methods;

  const servicesDropdownOptions = useMemo(
    () =>
      services.map((service) => ({
        label: service.title,
        value: service.id,
      })),
    [services],
  );

  const categoriesDropdownOptions = useMemo(
    () =>
      practiceCategories.map((category) => ({
        label: category.title,
        value: category.id,
      })),
    [practiceCategories],
  );

  const onCancel = useCallback(() => {
    router.push("/admin/practices");
  }, [router]);

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await deletePractice(initialValues.slug);
      notify.success("Практику успішно видалено");
      router.push("/admin/practices");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = handleSubmit(async ({ file, ...values }) => {
    try {
      setIsLoading(true);

      let pdfDto = file;

      if (file instanceof File) {
        const response = await uploadFile(
          file,
          `practices/${initialValues.id}`,
        );

        if (!response) {
          throw new Error("File uploading error");
        }

        pdfDto = response;
      }

      await updatePractice(initialValues.id, {
        file: pdfDto as FileDto,
        ...values,
      });

      notify.success("Практику успішно оновлено");
      router.push("/admin/practices");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  });

  return {
    methods,
    servicesDropdownOptions,
    categoriesDropdownOptions,
    isLoading,
    onCancel,
    onDelete,
    onSubmit,
  };
};
