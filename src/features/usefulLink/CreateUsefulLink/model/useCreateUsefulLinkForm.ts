import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import {
  createUsefulLink,
  UsefulLinkFormSchema,
  UsefulLinkFormValues,
} from "@entity/usefulLink";
import { notify } from "@shared/lib/toastr";

const DEFAULT_VALUES = {
  title: "",
  isActive: true,
  data: [
    {
      link: "",
      label: "",
      id: uuidv4(),
    },
  ],
};

export const useCreateUsefulLinkForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<UsefulLinkFormValues>({
    defaultValues: DEFAULT_VALUES,
    reValidateMode: "onChange",
    resolver: zodResolver(UsefulLinkFormSchema),
  });

  const { handleSubmit } = methods;

  const onCancel = () => {
    router.push("/admin/useful_links");
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      setIsLoading(true);

      const payload = {
        id: uuidv4(),
        ...values,
      };

      await createUsefulLink(payload);

      notify.success("Роздiл корисних посилань успішно оновлено");
      router.push("/admin/useful_links");
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
    onCancel,
    onSubmit,
  };
};
