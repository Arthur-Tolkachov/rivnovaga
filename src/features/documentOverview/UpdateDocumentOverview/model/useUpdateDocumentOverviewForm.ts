import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import {
  deleteDocumentOverview,
  DocumentOverviewFormSchema,
  DocumentOverviewFormValues,
  DocumentOverviewModel,
  updateDocumentOverview,
} from "@entity/documentOverview";
import { FileDto, uploadFile } from "@entity/upload";
import { notify } from "@shared/lib/toastr";

export interface UseUpdateDocumentOverviewForm {
  initialValues: DocumentOverviewModel;
}

export const useUpdateDocumentOverviewForm = ({
  initialValues,
}: UseUpdateDocumentOverviewForm) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const methods = useForm<DocumentOverviewFormValues>({
    defaultValues: initialValues,
    reValidateMode: "onChange",
    resolver: zodResolver(DocumentOverviewFormSchema),
  });

  const { handleSubmit } = methods;

  const onCancel = useCallback(() => {
    router.push("/admin/document_overviews");
  }, [router]);

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await deleteDocumentOverview(initialValues.id);
      notify.success("Зразок документа успішно видалено");
      router.push("/admin/document_overviews");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = handleSubmit(async ({ file, ...values }) => {
    try {
      setIsLoading(true);

      let fileDto = file;

      if (file instanceof File) {
        const response = await uploadFile(
          file,
          `document_overviews/${initialValues.id}`
        );

        if (!response) {
          throw new Error("File uploading error");
        }

        fileDto = response;
      }

      await updateDocumentOverview(initialValues.id, {
        file: fileDto as FileDto,
        ...values,
      });

      notify.success("Зразок документа успішно оновлено");
      router.push("/admin/document_overviews");
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
    onDelete,
    onSubmit,
  };
};
