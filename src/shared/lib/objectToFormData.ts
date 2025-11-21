export const objectToFormData = <TData>(obj: TData): FormData => {
  const formData = new FormData();

  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;

    const value = obj[key];

    if (value instanceof File) {
      formData.append(key, value);
    } else if (value !== null && typeof value === "object") {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, `${value}`);
    }
  }

  return formData;
};
