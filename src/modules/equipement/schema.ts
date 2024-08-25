import {number, string, z} from "zod";

export const equipementDto =  z.object({
    id: number().optional(),
    name: string(),
    description: string(),
    quantite: number()
});

export type createEquipement = z.infer<typeof equipementDto>;

export const equipement = {
    equipementDto
}