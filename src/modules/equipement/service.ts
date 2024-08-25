import { prisma } from "src/lib/db"
import { badRequestError, notFoundError } from "src/util/error";
import { createEquipement } from "./schema";

export const getAllEquipement = async() => {
    const equipements = await prisma.equipement.findMany();
    return equipements;
}

export const getAllEquipementById = async(id: number) => {
    try {
        const equipement = await prisma.equipement.findUnique({
            where:{
                id: id,
            },
        });
        if (!equipement) {
            throw notFoundError("equipement with id ",id.toString()," not found")
        }
        return equipement;
    } catch (error) {
        throw new error
    }
}

export const saveEquipement = async(data: createEquipement) =>{
    try {
        const {name,description,quantite} = data;
    if (!name||!description||!quantite) {
        throw badRequestError("body request invalid")
    }
    const saveEquipements = await prisma.equipement.create({
        data:{
            name,
            description,
            quantite,
        }
    });
    return saveEquipements;
    } catch (error) {
        throw new error
    }
}

export const deleteEquipement = async(id: number) => {
    try {
        const deleteEquipement = await prisma.equipement.delete({
            where:{
                id: id,
            }
        });
        return deleteEquipement;
    } catch (error) {
        throw notFoundError("failed to delete equipement with id ", "id", id.toString())
    }
}