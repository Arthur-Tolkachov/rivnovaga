import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";

import { PracticeModel } from "@entity/practice";
import {
  createPracticeCategory,
  PracticeCategoryFormSchema,
  PracticeCategoryFormValues,
  PracticeCategoryModel,
} from "@entity/practiceCategory";
import { FileDto, uploadFile } from "@entity/upload";
import { notify } from "@shared/lib/toastr";

const DEFAULT_VALUES = {
  id: "",
  slug: "",
  title: "",
  description: "",
  cover: {
    url: "",
    fileName: "",
  },
  practices: [],
} as PracticeCategoryModel;

export interface UseCreatePracticeCategoryFormProps {
  practices: PracticeModel[];
}

export const useCreatePracticeCategoryForm = ({
  practices,
}: UseCreatePracticeCategoryFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const methods = useForm<PracticeCategoryFormValues>({
    defaultValues: DEFAULT_VALUES,
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

  const onSubmit = handleSubmit(async ({ cover, slug: _slug, ...values }) => {
    try {
      setIsLoading(true);

      const id = uuidv4();

      const slug = slugify(values.title, {
        lower: true,
        strict: true,
      });

      let coverDto = cover;

      if (cover instanceof File) {
        const response = await uploadFile(cover, `practice_categories/${id}`);

        if (!response) {
          throw new Error("File uploading error");
        }

        coverDto = response;
      }

      await createPracticeCategory(id, {
        cover: coverDto as FileDto,
        slug,
        ...values,
      });

      notify.success("Роздiл успішно створено");
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
    onSubmit,
  };
};
