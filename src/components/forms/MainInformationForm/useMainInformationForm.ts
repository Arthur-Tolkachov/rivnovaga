import { useForm } from "react-hook-form";

export const useMainInformationForm = () => {
  const methods = useForm({
    defaultValues: {
      name: null,
    },
  });

  const { handleSubmit } = methods;

  console.log("watch() :>> ", methods.watch());

  const onSubmit = handleSubmit(() => {});

  return {
    methods,
    onSubmit,
  };
};
