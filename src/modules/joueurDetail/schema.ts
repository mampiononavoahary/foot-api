import {z} from "zod";
import { PostEnum } from "../post/schema";

export const joueurDetailDto = z.object({
    id: z.number().optional(),
    image: z.string(),
    numero: z.number(),
    post: PostEnum,
    maitriseDePostePercent: z.number()
});

export type createJourDetail = z.infer<typeof joueurDetailDto>;

export const joueurDetail = {
    joueurDetailDto
};