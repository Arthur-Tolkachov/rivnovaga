import z from "zod";

import { HeroDTOSchema } from "./hero.dto";

export const HeroFormSchema = HeroDTOSchema;

export type HeroFormValues = z.infer<typeof HeroFormSchema>;
