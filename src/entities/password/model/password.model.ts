import z from "zod";

export const PasswordSchema = z.object({
  confirmPassword: z.string(),
  password: z.string(),
});

export type PasswordModel = z.infer<typeof PasswordSchema>;
