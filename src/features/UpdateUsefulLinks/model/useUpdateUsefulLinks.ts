import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  updateUsefulLinks,
  UpdateUsefulLinksFormSchema,
  UpdateUsefulLinksFormValues,
  UsefulLinkModel,
} from "@entity/usefulLinks";
import { notify } from "@shared/lib/toastr";

export interface UseUpdateUsefulLinksProps {
  initialValues: UsefulLinkModel[];
}

export const useUpdateUsefulLinks = ({
  initialValues,
}: UseUpdateUsefulLinksProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const [defaultValues, setDefaultValues] =
    useState<UpdateUsefulLinksFormValues>({
      usefulLinks: initialValues,
    });

  const methods = useForm<UpdateUsefulLinksFormValues>({
    defaultValues,
    reValidateMode: "onChange",
    resolver: zodResolver(UpdateUsefulLinksFormSchema),
  });

  const { handleSubmit, reset } = methods;

  const onReset = () => {
    reset(defaultValues);
  };

  const onSubmit = handleSubmit(
    async (values) => {
      try {
        setIsLoading(true);

        const response = await updateUsefulLinks(values.usefulLinks);

        setDefaultValues({ usefulLinks: response });
        reset({ usefulLinks: response });
        notify.success("Кориснi посилання успішно оновлено");
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    () => {
      notify.error("Упс, форма заповнена з помилками");
    }
  );

  return {
    isLoading,
    methods,
    onReset,
    onSubmit,
  };
};
