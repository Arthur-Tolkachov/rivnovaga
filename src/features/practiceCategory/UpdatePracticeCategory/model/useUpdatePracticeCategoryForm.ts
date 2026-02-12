import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { PracticeModel } from "@entity/practice";
import {
  deletePracticeCategory,
  PracticeCategoryFormSchema,
  PracticeCategoryFormValues,
  PracticeCategoryModel,
  updatePracticeCategory,
} from "@entity/practiceCategory";
import { FileDto, uploadFile } from "@entity/upload";
import { notify } from "@shared/lib/toastr";

export interface UseUpdatePracticeCategoryForm {
  initialValues: PracticeCategoryModel;
  practices: PracticeModel[];
}

export const useUpdatePracticeCategoryForm = ({
  practices,
  initialValues,
}: UseUpdatePracticeCategoryForm) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const methods = useForm<PracticeCategoryFormValues>({
    defaultValues: initialValues,
    reValidateMode: "onChange",
    resolver: zodResolver(PracticeCategoryFormSchema),
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
    router.push("/admin/practice-categories");
  }, [router]);

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await deletePracticeCategory(initialValues.slug);
      notify.success("Pоздiл успішно видалено");
      router.push("/admin/practice-categories");
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
          `practice_categories/${initialValues.id}`,
        );

        if (!response) {
          throw new Error("File uploading error");
        }

        coverDto = response;
      }

      await updatePracticeCategory(initialValues.id, {
        cover: coverDto as FileDto,
        ...values,
      });

      notify.success("Роздiл успішно оновлено");
      router.push("/admin/practice-categories");
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
    onCancel,
    onDelete,
    onSubmit,
  };
};
