import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { getProfile, editProfile } from "@entity/profile";
import { FileDto, uploadFile } from "@entity/upload";
import { notify } from "@shared/lib/toastr";

import { DEFAULT_VALUES } from "./form";
import { EditProfileFormSchema, EditProfileFormValues } from "./validation";
import { createDtoFromData } from "../lib/createDtoFromData";

export const useEditProfileForm = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [initialData, setInitialData] =
    useState<EditProfileFormValues>(DEFAULT_VALUES);

  const methods = useForm<EditProfileFormValues>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(EditProfileFormSchema),
    reValidateMode: "onChange",
  });

  const { reset, handleSubmit } = methods;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProfile();

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
  }, []);

  useEffect(() => {
    reset(initialData);
  }, [reset, initialData]);

  const onReset = () => {
    reset(initialData);
  };

  const onSubmit = handleSubmit(
    async ({ logo, ...values }) => {
      try {
        setIsLoading(true);
        let logoDto = logo;

        if (logo instanceof File) {
          const response = await uploadFile(logo, "logo");

          if (!response) {
            throw new Error("File uploading error");
          }

          logoDto = response;
        }

        const response = await editProfile({
          logo: logoDto as FileDto,
          ...values,
        });

        if (response) {
          setInitialData(response);
          notify.success("Основну iнформацію успішно оновлено");
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
    methods,
    isLoading,
    isFetching,
    onReset,
    onSubmit,
  };
};
