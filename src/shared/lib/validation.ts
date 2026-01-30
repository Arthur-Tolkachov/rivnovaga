import z from "zod";

export const EmailValidationSchema = z.email({
  message: "Невалiдна електронна пошта",
});

export const PhoneValidationSchema = z
  .string()
  .min(13, "Телефон має містити 13 символiв, включно +38");
