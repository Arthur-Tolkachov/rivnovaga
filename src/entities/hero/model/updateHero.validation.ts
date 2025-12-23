import z from "zod";

import { UpdateHeroDTOSchema } from "./updateHero.dto";

export const UpdateHeroFormSchema = UpdateHeroDTOSchema;

export type UpdateHeroFormValues = z.infer<typeof UpdateHeroFormSchema>;
