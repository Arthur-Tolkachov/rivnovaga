import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { getOrganization } from "@entity/organization";

const defaultValues = {
  name: "",
  logoUrl: "",
  email: "",
  phone: "",
  telegram: "",
  viber: "",
  whatsapp: "",
  address: {
    index: "",
    city: "",
    street: "",
    building: "",
    office: "",
  },
  map: {
    lat: "",
    lng: "",
  },
  working_days_schedule: {
    start: "",
    end: "",
  },
  working_time_schedule: {
    start: "",
    end: "",
  },
};

export const useEditMainInformationForm = () => {
  const [isFetching, setIsFetching] = useState(true);

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
            ...defaultValues,
            name: data.name,
            logoUrl: data.logoUrl,
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsFetching(false);
      }
    };

    getData();
  }, [reset]);

  console.log("watch() :>> ", methods.watch());

  const onSubmit = handleSubmit(() => {});

  return {
    methods,
    isFetching,
    onSubmit,
  };
};
