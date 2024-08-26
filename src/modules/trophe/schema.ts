import {number, z} from "zod";

export const tropheDto = z.object({
    id: z.number().optional(),
    image: z.string(),
    matchId: z.number(),
    tropheName: z.string()
});

export type createTrophe = z.infer<typeof tropheDto>;

export const trophe = {
    tropheDto
}