import { prisma } from "src/lib/db"
import { badRequestError, notFoundError } from "src/util/error";
import { createMatch } from "./schema";

export const getAllMatch = async() =>{
    const matchs = await prisma.match.findMany({
        include:{
            detail:true
        }
    });

    if (!matchs) {
        throw notFoundError(`All matchs not found`);
    }
    return matchs;
}

export const getMatchById = async(id: number) => {
    try {
        const match = await prisma.match.findUnique({
            where:{
                id: id
            },
            include:{
                detail:true
            }
        });
        if (!match) {
            throw notFoundError(`match with id ${id} not found`)
        }
        return match;
    } catch (error) {
        throw new error("Internal server error");
    }
}

export const saveMatch = async(data: createMatch) =>{
    try {
        const {adversairre,detailDeMatch} = data;
        if (!adversairre || !detailDeMatch) {
            throw badRequestError("Your body request is bad");
        }
        const newMatch = await prisma.match.create({
            data:{
                adversairre,
                detailDeMatch
            },
        });
        return newMatch;
    } catch (error) {
        throw new error({message: error.message})
    }
}

export const deleteMatch = async(id: number) =>{
    try {
        const deleteAMatch = await prisma.match.delete({
            where:{
                id:id
            },
        });
        return deleteAMatch;
    } catch (error) {
        throw new error({message: error.message})
    }
}