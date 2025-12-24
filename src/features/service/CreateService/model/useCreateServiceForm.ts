import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import {
  createService,
  ServiceFormSchema,
  ServiceFormValues,
  ServiceModel,
} from "@entity/services";
import { FileDto, uploadFile } from "@entity/upload";
import { notify } from "@shared/lib/toastr";

const DEFAULT_VALUES = {
  title: "",
  description: "",
  isActive: true,
  cover: {
    url: "",
    fileName: "",
  },
} as ServiceModel;

export const useCreateServiceForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const methods = useForm<ServiceFormValues>({
    defaultValues: DEFAULT_VALUES,
    reValidateMode: "onChange",
    resolver: zodResolver(ServiceFormSchema),
  });

  const { reset, handleSubmit } = methods;

  const onCancel = () => {
    reset(DEFAULT_VALUES);
  };

  const onSubmit = handleSubmit(async ({ cover, ...values }) => {
    try {
      setIsLoading(true);

      const id = uuidv4();
      let coverDto = cover;

      if (cover instanceof File) {
        const response = await uploadFile(cover, `services/${id}`);

        if (!response) {
          throw new Error("File uploading error");
        }

        coverDto = response;
      }

      await createService(id, {
        cover: coverDto as FileDto,
        ...values,
      });

      notify.success("Послугу успішно створено");
      router.push("/admin/services");
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
