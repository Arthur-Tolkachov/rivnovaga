import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

import { editAbout, getAbout } from "@entity/about";
import { notify } from "@shared/lib/toastr";

import {
  EditAboutSectionFormSchema,
  EditAboutSectionFormValues,
} from "./validation";
import { createDtoFromData } from "../lib/createDtoFromData";

const DEFAULT_VALUES = {
  about: [],
};

export const useEditAboutSectionForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const [initialData, setInitialData] =
    useState<EditAboutSectionFormValues>(DEFAULT_VALUES);

  const methods = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(EditAboutSectionFormSchema),
    reValidateMode: "onChange",
  });

  const { handleSubmit, control, reset } = methods;

  const { fields } = useFieldArray({
    name: "about",
    control,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAbout();

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

      await editAbout(values);

      notify.success('Секцiю "Про нас" успішно оновлено');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  });

  return {
    fields,
    isLoading,
    isFetching,
    methods,
    onReset,
    onSubmit,
  };
};
