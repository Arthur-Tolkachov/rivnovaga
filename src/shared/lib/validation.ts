import z from "zod";

export const EmailValidationSchema = z.email({
  message: "Невалiдна електронна пошта",
});

export const PhoneValidationSchema = z.string().superRefine((value, ctx) => {
  if (value && value.length < 13) {
    ctx.addIssue({
      origin: "string",
      code: "too_small",
      minimum: 13,
      message: "Телефон має містити 13 символiв, включаючи +38",
    });
  }
});
