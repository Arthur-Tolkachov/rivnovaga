export const objectToFormData = <TData>(obj: TData): FormData => {
  const formData = new FormData();

  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;

    const value = obj[key];
    const preparedValue = value instanceof File ? value : JSON.stringify(value);

    formData.append(key, preparedValue);
  }

  return formData;
};
