import { prisma } from "src/lib/db"
import { conflictError, notFoundError } from "src/util/error";
import { createCoach } from "./schema";

export const getAllCoach = async() => {
    const coachs = await prisma.coach.findMany();
    return coachs;
}

export const getCoachById = async(id:number) =>{
    const coachId = await prisma.coach.findUnique({
        where:{
            id: id,
        },
    });
    if (!coachId) {
        throw notFoundError("coach", "id", id.toString());
    }
    return coachId;
}

export const saveCoach = async (data: createCoach) => {
    try {
        // On vérifie que toutes les propriétés requises sont présentes
        const { image, name, prenoms, email, contact, address, dateDeNaissance } = data;

        const getCoachByEMail = await prisma.coach.findFirst({
            where:{
                email: email
            },
        });
        if (getCoachByEMail) {
            throw conflictError(`${email} is already exists`);
        }
        if (!image || !name || !email || !contact || !address || !dateDeNaissance) {
            throw new Error("Missing required fields for Coach creation.");
        }

        const formattedDate = new Date(dateDeNaissance+'T00:00:00.000Z');

        const newCoach = await prisma.coach.create({
            data: {
                image,
                name,
                prenoms,
                email,
                contact,
                address,
                dateDeNaissance: formattedDate
            }
        });
                
        return newCoach;
    } catch (error) {
        throw new Error(`Failed to save coach: ${error.message}`);
        
    }
};

export const updateCoach = async (data: createCoach) => {
    try {
        // On vérifie que toutes les propriétés requises sont présentes
        const { image, name, prenoms, email, contact, address, dateDeNaissance } = data;

        if (!image || !name || !email || !contact || !address || !dateDeNaissance) {
            throw new Error("Missing required fields for Coach creation.");
        }

        const formattedDate = new Date(dateDeNaissance+'T00:00:00.000Z');


        const newCoach = await prisma.coach.update({
            where:{
                id:data.id
            },
            data: {
                image,
                name,
                prenoms,
                email,
                contact,
                address,
                dateDeNaissance:formattedDate
            }
        });

        return newCoach;
    } catch (error) {
        throw new Error(`Failed to save coach: ${error.message}`);
    }
};

export const deleteCoach = async (id: number) => {
    try {
        const deletedCoach = await prisma.coach.delete({
            where: {
                id: id,
            },
        });
        return deletedCoach;
    } catch (error) {
        throw new Error(`Failed to delete coach with ID ${id}: ${error.message}`);
    }
};



