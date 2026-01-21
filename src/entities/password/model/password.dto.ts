import z from "zod";

export const PasswordDTOSchema = z.object({
  password: z
    .string()
    .min(8, "Пароль має містити щонайменше 8 символів")
    .regex(/[a-z]/, "Пароль має містити хоча б одну малу літеру")
    .regex(/[A-Z]/, "Пароль має містити хоча б одну велику літеру")
    .regex(/[^\w\s]/, "Пароль має містити хоча б один спеціальний символ"),
});

export type PasswordDTO = z.infer<typeof PasswordDTOSchema>;
