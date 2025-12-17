import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { getUsefulLinks } from "@entity/usefulLinks";
import { editUsefulLinks } from "@entity/usefulLinks/api/repository";
import { notify } from "@shared/lib/toastr";

import {
  EditUsefulLinksFormValues,
  EditUsefulLinksFormSchema,
} from "./validation";
import { createDtoFromData } from "../lib/createDtoFromData";

const DEFAULT_VALUES = {
  useful_links: [],
};

export const useEditUsefulLinks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const [initialData, setInitialData] =
    useState<EditUsefulLinksFormValues>(DEFAULT_VALUES);

  const methods = useForm<EditUsefulLinksFormValues>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(EditUsefulLinksFormSchema),
    reValidateMode: "onChange",
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getUsefulLinks();

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

  const onSubmit = handleSubmit(
    async (values) => {
      try {
        setIsLoading(true);

        const response = await editUsefulLinks(values);
        if (response) {
          setInitialData(response);
          notify.success("Кориснi посилання успішно оновлено");
        }
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
    isFetching,
    methods,
    onReset,
    onSubmit,
  };
};
