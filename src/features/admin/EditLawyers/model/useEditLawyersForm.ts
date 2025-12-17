import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { getLawyers, UpdateLawyersDTO } from "@entity/lawyers";
import { editLawyers } from "@entity/lawyers/api/repository";
import { uploadFile } from "@entity/upload";
import { notify } from "@shared/lib/toastr";

import { EditLawyersFormSchema, EditLawyersFormValues } from "./validation";
import { createDtoFromData } from "../lib/createDtoFromData";

const DEFAULT_VALUES = {
  about_lawyers: {
    title: "",
    subtitle: "",
  },
  lawyers: [],
};

export const useEditLawyersForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const [initialData, setInitialData] =
    useState<UpdateLawyersDTO>(DEFAULT_VALUES);

  const methods = useForm<EditLawyersFormValues>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(EditLawyersFormSchema),
    reValidateMode: "onChange",
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getLawyers();

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
    async ({ lawyers, ...values }) => {
      try {
        setIsLoading(true);

        const preparedLawyers = await Promise.all(
          lawyers.map(async ({ photo, ...rest }) => {
            if (photo instanceof File) {
              const photoDto = await uploadFile(photo, "lawyers");

              if (!photoDto) {
                throw new Error("File uploading error");
              }

              return { photo: photoDto, ...rest };
            }

            return { photo, ...rest };
          })
        );

        const response = await editLawyers({
          lawyers: preparedLawyers,
          ...values,
        });

        if (response) {
          setInitialData(response);
          notify.success("Секцiю 'Адвокати' успішно оновлено");
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
