import {date, number, string, z} from "zod";

export const detailMatchDto = z.object({
    id: z.number().optional(),
    jourDuMatch: z.date(),
    maromaintyBut: z.number(),
    adversairreBut: z.number().int(),
    qualificationName: z.string()
});

export type createDetailMatch = z.infer<typeof detailMatchDto>;

export const detailMatch = {
    detailMatchDto
};