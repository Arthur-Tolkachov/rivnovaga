import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { getOrganization } from "@entity/organization";

export const useEditMainInformationForm = () => {
  const defaultValues = {
    name: "",
    logoUrl: "",
  };

  const methods = useForm({
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getOrganization();

        if (data) {
          reset({
            name: data.name,
            logoUrl: data.logoUrl,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [reset]);

  console.log("watch() :>> ", methods.watch());

  const onSubmit = handleSubmit(() => {});

  return {
    methods,
    onSubmit,
  };
};
