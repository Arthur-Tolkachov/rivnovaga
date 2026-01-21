import z from "zod";

import { PasswordDTOSchema } from "./password.dto";

export const PasswordFormSchema = PasswordDTOSchema.extend({
  confirmPassword: z.string().min(1, "Це обов`язкове поле"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Паролі не співпадають",
  path: ["confirmPassword"],
});

export type PasswordFormValues = z.infer<typeof PasswordFormSchema>;
