export type FormDataToObjectSchemeDataType = "string" | "file" | "object";

interface FormDataToObjectProps {
  formData: FormData;
  schema: [string, FormDataToObjectSchemeDataType][];
}

export const formDataToObject = <TData>({
  formData,
  schema,
}: FormDataToObjectProps): TData => {
  const obj = schema.reduce((acc, [key, value]) => {
    if (value === "file") {
      return {
        ...acc,
        [key]: formData.get(key) as File | { url: string; fileName: string },
      };
    }

    if (value === "object") {
      return {
        ...acc,
        [key]: JSON.parse(formData.get(key) as string),
      };
    }

    return {
      ...acc,
      [key]: formData.get(key) as string,
    };
  }, {} as TData);

  return obj;
};
