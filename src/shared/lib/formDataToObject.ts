export type FormDataToObjectSchemeDataType = "string" | "file" | "object";

export const formDataToObject = <TData>(formData: FormData): TData => {
  const obj = {} as TData;

  formData.forEach((value, key) => {
    const preparedValue = value instanceof File ? value : JSON.parse(value);

    (obj as Record<keyof TData, string | File>)[key as keyof TData] =
      preparedValue;
  });

  return obj;
};
