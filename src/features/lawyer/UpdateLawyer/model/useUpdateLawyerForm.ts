import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import { deleteLawyer, updateLawyer } from "@entity/lawyer";
import {
  LawyerFormSchema,
  LawyerFormValues,
  LawyerModel,
} from "@entity/lawyer";
import { FileDto, uploadFile } from "@entity/upload";
import { notify } from "@shared/lib/toastr";

export interface UseUpdateLawyerFormProps {
  initialValues: LawyerModel;
}

export const useUpdateLawyerForm = ({
  initialValues,
}: UseUpdateLawyerFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<LawyerFormValues>({
    defaultValues: initialValues,
    reValidateMode: "onChange",
    resolver: zodResolver(LawyerFormSchema),
  });

  const { handleSubmit } = methods;

  const onCancel = useCallback(() => {
    router.push("/admin/lawyers");
  }, [router]);

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await deleteLawyer(initialValues.id);
      notify.success("Адвоката успішно видалено");
      router.push("/admin/lawyers");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = handleSubmit(async ({ photo, ...values }) => {
    try {
      setIsLoading(true);

      let photoDto = photo;

      if (photo instanceof File) {
        const response = await uploadFile(photo, `lawyers/${initialValues.id}`);

        if (!response) {
          throw new Error("File uploading error");
        }

        photoDto = response;
      }

      await updateLawyer(initialValues.id, {
        photo: photoDto as FileDto,
        ...values,
      });

      notify.success("Адвоката успішно оновлено");
      router.push("/admin/lawyers");
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
    isLoading,
    onCancel,
    onDelete,
    onSubmit,
  };
};
