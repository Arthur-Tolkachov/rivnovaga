import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { getFullOrganization } from "@entity/organization";

import { DEFAULT_VALUES } from "./form";
import {
  EditMainInformationFormSchema,
  EditMainInformationFormValues,
} from "./validation";
import { UpdateMainInformationDTO } from "../api/dto";
import { createDtoFromData } from "../lib/createDtoFromData";

export const useEditMainInformationForm = () => {
  const [isFetching, setIsFetching] = useState(true);
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

  const onSubmit = handleSubmit((values) => {
    console.log("values :>> ", values);
  });

  return {
    methods,
    isFetching,
    onReset,
    onSubmit,
  };
};
