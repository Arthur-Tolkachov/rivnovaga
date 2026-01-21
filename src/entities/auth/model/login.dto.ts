import z from "zod";

export const LoginDTOSchema = z.object({
  email: z.email("Некоректний email"),
  password: z.string().min(1, "Це обов`язкове поле"),
});

export type LoginDTO = z.infer<typeof LoginDTOSchema>;
