import { prisma } from "src/lib/db"
import { badRequestError, notFoundError } from "src/util/error";
import { createDetailMatch } from "./schema";

export const getAllDetailMatch = async() => {
    const detailMatchs = await prisma.detailDeMatch.findMany();
    return detailMatchs;
}

export const getDetailMatchById = async(id: number) => {
    try {
        const detailDeMatch = await prisma.detailDeMatch.findUnique({
            where:{
                id: id,
            },
        });
        if (!detailDeMatch) {
            throw notFoundError(`detail match with ${id.toString()} not found`)
        }
        return detailDeMatch;
    } catch (error) {
        throw new error
    }
}

export const saveDetailMatch = async(data: createDetailMatch) =>{
    try {
        const {jourDuMatch,maromaintyBut,adversairreBut,qualificationName}= data;

        if (!qualificationName || !jourDuMatch || !maromaintyBut || !adversairreBut) {
            throw new Error("Missing required fields for detail match creation.");
        }

        const formattedDate = new Date(jourDuMatch+'T00:00:00.000Z');
        
        const saveDetail = await prisma.detailDeMatch.create({
            data:{
                jourDuMatch:formattedDate,
                maromaintyBut,
                adversairreBut,
                qualificationName
            },
        });
        return saveDetail;
    } catch (error) {
        throw new Error(`Failed to save detail match: ${error.message}`);
    }
}

export const deleteDetailMatch = async(id: number) =>{
    try {
        const removeDetailMatch = await prisma.detailDeMatch.delete({
            where:{
                id: id
            },
        });
        return removeDetailMatch;
    } catch (error) {
        throw notFoundError(`detail match with id ${id.toString()} not deleted`)
    }
}