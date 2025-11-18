export const transformStringToNumberString = (value: string) =>
  value.replace(/\D/g, "");

export const maxLength = (value: string, max: number) => value.slice(0, max);

export const transformStringToLatLng = (value: string) =>
  value.replace(/[^0-9.-]/g, "");
