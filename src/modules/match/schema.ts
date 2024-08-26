import {z} from "zod";

export const mathcDto = z.object({
    id: z.number().optional(),
    adversairre: z.string(),
    detailDeMatch: z.number()
});

export type createMatch = z.infer<typeof mathcDto>;

export const match = {
    mathcDto
}