import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  getFullOrganization,
  UpdateMainInformationDTO,
} from "@entity/organization";
import { editOrganization } from "@entity/organization/repository";
import { objectToFormData } from "@shared/lib/objectToFormData";
import { notify } from "@shared/lib/toastr";

import { DEFAULT_VALUES } from "./form";
import {
  EditMainInformationFormSchema,
  EditMainInformationFormValues,
} from "./validation";
import { createDtoFromData } from "../lib/createDtoFromData";

export const useEditMainInformationForm = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [initialData, setInitialData] =
    useState<UpdateMainInformationDTO>(DEFAULT_VALUES);

  const methods = useForm<EditMainInformationFormValues>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(EditMainInformationFormSchema),
    reValidateMode: "onChange",
  });

  const { reset, handleSubmit } = methods;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getFullOrganization();

        if (data) {
          const preparedData = createDtoFromData(data);
          setInitialData((prev) => ({ ...prev, ...preparedData }));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsFetching(false);
      }
    };

    getData();
  }, [reset]);

  useEffect(() => {
    reset(initialData);
  }, [reset, initialData]);

  const onReset = () => {
    reset(initialData);
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      setIsLoading(true);
      const formData = objectToFormData<UpdateMainInformationDTO>(values);

      await editOrganization(formData);

      notify.success("Основну iнформацію успішно оновлено");
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
