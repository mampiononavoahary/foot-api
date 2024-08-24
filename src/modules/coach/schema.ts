import {z} from "zod";

export const coachDto = z.object({
    id: z.number().optional(),  // Rendre 'id' optionnel
    image: z.string(),
    name: z.string().min(2),
    prenoms: z.string().min(2),
    email: z.string().email().min(5),
    contact: z.string(),
    address: z.string(),
    dateDeNaissance: z.date(),
});


export type createCoach = z.infer<typeof coachDto>;

export const coach = {
    coachDto
}