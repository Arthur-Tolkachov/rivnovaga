import z from "zod";

export const LoginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type LoginModel = z.infer<typeof LoginSchema>;
