import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";

import { createLawyer } from "@entity/lawyer";
import {
  LawyerFormSchema,
  LawyerFormValues,
  LawyerModel,
} from "@entity/lawyer";
import { FileDto, uploadFile } from "@entity/upload";
import { notify } from "@shared/lib/toastr";

const DEFAULT_VALUES = {
  slug: "",
  name: "",
  surname: "",
  patronymic: "",
  certificate: {
    number: "",
    date: "",
  },
  phone: "",
  description: "",
  isActive: true,
  photo: {
    url: "",
    fileName: "",
  },
} as LawyerModel;

export const useCreateLawyerForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const methods = useForm<LawyerFormValues>({
    defaultValues: DEFAULT_VALUES,
    reValidateMode: "onChange",
    resolver: zodResolver(LawyerFormSchema),
  });

  const { handleSubmit } = methods;

  const onCancel = useCallback(() => {
    router.push("/admin/lawyers");
  }, [router]);

  const onSubmit = handleSubmit(async ({ photo, slug: _slug, ...values }) => {
    try {
      setIsLoading(true);

      const fullName = `${values.surname} ${values.name} ${values.patronymic}`;

      const id = uuidv4();
      const slug = slugify(fullName, {
        lower: true,
        strict: true,
      });

      let photoDto = photo;

      if (photo instanceof File) {
        const response = await uploadFile(photo, `lawyers/${id}`);

        if (!response) {
          throw new Error("File uploading error");
        }

        photoDto = response;
      }

      await createLawyer(id, {
        photo: photoDto as FileDto,
        slug,
        ...values,
      });

      notify.success("Адвоката успішно створено");
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
    onSubmit,
  };
};
