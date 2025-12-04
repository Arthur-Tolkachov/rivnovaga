import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { editHero, getHero, UpdateHeroSectionDTO } from "@entity/hero";
import { notify } from "@shared/lib/toastr";

import {
  EditHeroSectionFormSchema,
  EditHeroSectionFormValues,
} from "./validation";
import { createDtoFromData } from "../lib/createDtoFromData";

const DEFAULT_VALUES = {
  hero: {
    title: "",
    subtitle: "",
  },
};

export const useEditHeroSectionForm = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [initialData, setInitialData] =
    useState<UpdateHeroSectionDTO>(DEFAULT_VALUES);

  const methods = useForm<EditHeroSectionFormValues>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(EditHeroSectionFormSchema),
    reValidateMode: "onChange",
  });

  const { reset, handleSubmit } = methods;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getHero();

        if (data) {
          const preparedData = createDtoFromData(data);
          setInitialData(preparedData);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsFetching(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    reset(initialData);
  }, [reset, initialData]);

  const onReset = () => {
    reset(initialData);
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      setIsLoading(true);

      await editHero(values);

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
    isFetching,
    onReset,
    onSubmit,
  };
};
