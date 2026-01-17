export const transformPhoneToUserFriendly = (phone: string | null) => {
  if (!phone) {
    return null;
  }

  return phone.replace(
    /^(\+\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/,
    "$1 ($2) $3-$4-$5"
  );
};
