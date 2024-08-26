import {string, z} from "zod";

export const joueurDetail = z.object({
    GARDIEN_DE_BUT: z.string(),
    ARRIERE_LATERAL: z.string(),
    STOPPEUR: z.string(),
    LIBERO: z.string(),
    MILIEU_DEFENSIF: z.string(),
    MILIEU_OFFENSIF: z.string(),
    ATTAQUANT: z.string(),
    AVANT_CENTRE: z.string(),
    REMPLACANT: z.string()
});

