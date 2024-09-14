import {z} from "zod";

export const joueurDto = z.object({
    id: z.number().optional(),
    name: z.string(),
    prenoms: z.string(),
    dateDeNaissance: z.date(),
    address: z.string(),
    contact: z.string(),
    joueurDetail: z.number(),
});

export type createJoueur = z.infer<typeof joueurDto>;

export const joueur = {
    joueurDto
};