import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import {
  HeroModel,
  updateHero,
  HeroFormSchema,
  HeroFormValues,
} from "@entity/hero";
import { notify } from "@shared/lib/toastr";

export interface UseUpdateHeroSectionFormProps {
  initialValues: HeroModel;
}

export const useUpdateHeroSectionForm = ({
  initialValues,
}: UseUpdateHeroSectionFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const [defaultValues, setDefaultValues] = useState<HeroModel>(initialValues);

  const methods = useForm<HeroFormValues>({
    defaultValues,
    reValidateMode: "onChange",
    resolver: zodResolver(HeroFormSchema),
  });

  const { reset, handleSubmit } = methods;

  const onCancel = useCallback(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  const onSubmit = handleSubmit(async (values) => {
    try {
      setIsLoading(true);

      const response = await updateHero(values);

      setDefaultValues(response);
      reset(response);
      notify.success("Головний екран успішно оновлено");
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
