import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import {
  PracticeFormValues,
  PracticeFormSchema,
  createPractice,
} from "@entity/practice";
import { PracticeCategoryModel } from "@entity/practiceCategory";
import { ServiceModel } from "@entity/service";
import { FileDto, uploadFile } from "@entity/upload";
import { notify } from "@shared/lib/toastr";

const DEFAULT_VALUES = {
  title: "",
  caseNumber: "",
  proceedingNumber: "",
  isActive: true,
  url: "",
  city: "",
  file: {
    url: "",
    fileName: "",
  },
  services: null,
  categories: null,
};

export interface UseCreatePracticeFormProps {
  services: ServiceModel[];
  practiceCategories: PracticeCategoryModel[];
}

export const useCreatePracticeForm = ({
  services,
  practiceCategories,
}: UseCreatePracticeFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const methods = useForm<PracticeFormValues>({
    defaultValues: DEFAULT_VALUES,
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

  const onSubmit = handleSubmit(async ({ file, ...values }) => {
    try {
      setIsLoading(true);

      const id = uuidv4();

      let pdfDto = file;

      if (file instanceof File) {
        const response = await uploadFile(file, `practices/${id}`);

        if (!response) {
          throw new Error("File uploading error");
        }

        pdfDto = response;
      }

      await createPractice(id, {
        file: pdfDto as FileDto,
        ...values,
      });

      notify.success("Практику успішно створено");
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
    onSubmit,
  };
};
