import { prisma } from "src/lib/db"
import { badRequestError, notFoundError } from "src/util/error";
import { createTrophe } from "./schema";
import { detailMatch } from "../detailDeMatch/schema";

export const getAllTrophe = async() => {
    try {
        const trophes = await prisma.trophe.findMany({
            include:{
                match: true
            }
        });

        if (!trophes) {
            throw notFoundError(`All trophe not found`);
        }
        return trophes;
    } catch (error) {
        throw new error({message: error.message});
    }
}

export const getTropheByName = async(name: string) => {
    try {
        const getTrophe = await prisma.trophe.findMany({
            where:{
                tropheName: name
            },
            include:{
                match:{
                    include:{
                        detail:true
                    }
                }
            },
        });
        if (!getTrophe) {
            throw notFoundError(`trophe with name ${name} not found`);
        }
        return getTrophe;
    } catch (error) {
        throw new error ({message: error.message});
    }
}

export const saveTrophe = async(data: createTrophe) =>{
    try {
        const {image,matchId,tropheName} = data;

        if (!image || !matchId || !tropheName) {
            throw badRequestError("Your request body is bad");
        }
        const trophe = await prisma.trophe.create({
            data:{
                image,
                matchId,
                tropheName
            },
        });
        return trophe;
    } catch (error) {
        throw new error({message: error.message});
    }
}

export const deleteTrophe = async(id: number)=>{
    try {
        const removeTrophe = await prisma.trophe.delete({
            where:{
                id:id
            },
        });
        if (!removeTrophe) {
            throw badRequestError(`Failed to delete trophe with id ${id.toString()}`)
        }
    } catch (error) {
        throw new error({message: error.message})
    }
}
