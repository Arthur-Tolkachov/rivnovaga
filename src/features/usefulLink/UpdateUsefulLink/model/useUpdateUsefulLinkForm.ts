import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  deleteUsefulLink,
  updateUsefulLink,
  UsefulLinkFormSchema,
  UsefulLinkFormValues,
  UsefulLinkModel,
} from "@entity/usefulLink";
import { notify } from "@shared/lib/toastr";

export interface UseUpdateUsefulLinkForm {
  initialValues: UsefulLinkModel;
}

export const useUpdateUsefulLinkForm = ({
  initialValues,
}: UseUpdateUsefulLinkForm) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<UsefulLinkFormValues>({
    defaultValues: initialValues,
    reValidateMode: "onChange",
    resolver: zodResolver(UsefulLinkFormSchema),
  });

  const { handleSubmit } = methods;

  const onCancel = () => {
    router.push("/admin/useful-links");
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await deleteUsefulLink(initialValues.id);
      notify.success("Роздiл корисних посилань успішно видалено");
      router.push("/admin/useful-links");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      setIsLoading(true);

      await updateUsefulLink(initialValues.id, values);

      notify.success("Роздiл корисних посилань успішно оновлено");
      router.push("/admin/useful-links");
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        notify.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  });

  return {
    isLoading,
    methods,
    onDelete,
    onCancel,
    onSubmit,
  };
};
