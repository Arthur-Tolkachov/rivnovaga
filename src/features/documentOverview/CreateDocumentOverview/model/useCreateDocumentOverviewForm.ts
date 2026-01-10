import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import {
  createDocumentOverview,
  DocumentOverviewFormSchema,
  DocumentOverviewFormValues,
  DocumentOverviewModel,
} from "@entity/documentOverview";
import { FileDto, uploadFile } from "@entity/upload";
import { notify } from "@shared/lib/toastr";

const DEFAULT_VALUES = {
  title: "",
  isActive: true,
  file: {
    url: "",
    fileName: "",
  },
} as DocumentOverviewModel;

export const useCreateDocumentOverviewForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const methods = useForm<DocumentOverviewFormValues>({
    defaultValues: DEFAULT_VALUES,
    reValidateMode: "onChange",
    resolver: zodResolver(DocumentOverviewFormSchema),
  });

  const { handleSubmit } = methods;

  const onCancel = useCallback(() => {
    router.push("/admin/document_overviews");
  }, [router]);

  const onSubmit = handleSubmit(async ({ file, ...values }) => {
    try {
      setIsLoading(true);
      const id = uuidv4();

      let fileDto = file;

      if (file instanceof File) {
        const response = await uploadFile(file, `document_overviews/${id}`);

        if (!response) {
          throw new Error("File uploading error");
        }

        fileDto = response;
      }

      await createDocumentOverview(id, {
        file: fileDto as FileDto,
        ...values,
      });

      notify.success("Новий зразок документа успішно створено");
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
    onSubmit,
  };
};
