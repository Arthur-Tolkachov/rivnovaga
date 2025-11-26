import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { getProfile, editProfile, UpdateProfileDTO } from "@entity/profile";
import { objectToFormData } from "@shared/lib/objectToFormData";
import { notify } from "@shared/lib/toastr";

import { DEFAULT_VALUES } from "./form";
import { EditProfileFormSchema, EditProfileFormValues } from "./validation";
import { createDtoFromData } from "../lib/createDtoFromData";

export const useEditProfileForm = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [initialData, setInitialData] =
    useState<UpdateProfileDTO>(DEFAULT_VALUES);

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

  const onSubmit = handleSubmit(async (values) => {
    try {
      setIsLoading(true);
      const formData = objectToFormData<UpdateProfileDTO>(values);

      await editProfile(formData);

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
