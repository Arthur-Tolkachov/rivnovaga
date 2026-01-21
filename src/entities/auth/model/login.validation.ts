import z from "zod";

import { LoginDTOSchema } from "./login.dto";

export const LoginFormSchema = LoginDTOSchema;

export type LoginFormValues = z.infer<typeof LoginFormSchema>;
