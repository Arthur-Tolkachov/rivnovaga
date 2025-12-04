import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { editCta, getCta } from "@entity/cta";
import { notify } from "@shared/lib/toastr";

import {
  EditCtaSectionFormSchema,
  EditCtaSectionFormValues,
} from "./validation";
import { createDtoFromData } from "../lib/createDtoFromData";

const DEFAULT_VALUES = {
  cta: {
    title: "",
    description: "<p><br></p>",
  },
};

export const useEditCtaSectionForm = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [initialData, setInitialData] =
    useState<EditCtaSectionFormValues>(DEFAULT_VALUES);

  const methods = useForm<EditCtaSectionFormValues>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(EditCtaSectionFormSchema),
    reValidateMode: "onChange",
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCta();

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

      await editCta(values);

      notify.success("Секцiя заклику до дії успішно оновлено");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  });

  return {
    methods,
    isFetching,
    isLoading,
    onSubmit,
    onReset,
  };
};
