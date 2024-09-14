import { prisma } from "src/lib/db"
import { badRequestError, notFoundError } from "src/util/error";
import { createJoueur } from "./schema";
import { error } from "console";

export const getAllJoueur = async() =>{
    try {
        const joueurs = await prisma.joueur.findMany({
            include:{
                detail:true
            },
        });
        if (joueurs.length ==0) {
            throw notFoundError("All joueur not found");
        }
        return joueurs;
    } catch (error) {
        throw new error({message: error.message});
    }
}

export const getJoueursByName = async(name: string) => {
    try {
        const joueur = await prisma.joueur.findMany({
            where:{
                name: name
            },
            include:{
                detail:true
            },
        });
        if (joueur.length == 0) {
            throw notFoundError(`joueur with name ${name} not found`)
        }
        return joueur;
    } catch (error) {
        throw new error({message: error.message})
    }
}

export const saveJoueur = async(data:createJoueur)=> {
    try {
        const {name,prenoms,dateDeNaissance,address,contact,joueurDetail} = data;

        const formattedDate = new Date(dateDeNaissance+'T00:00:00.000Z');
        if (!name || !prenoms || !dateDeNaissance||!address||!contact||!joueurDetail) {
            throw badRequestError("An error on request body");
        }
        const newJoueur = await prisma.joueur.create({
            data:{
                name,
                prenoms,
                dateDeNaissance:formattedDate,
                address,
                contact,
                joueurDetail
            }
        });
        return newJoueur;
    } catch (error) {
        throw new error({message: error.message});
    }
}

export const deleteJoueur = async(id:number) => {
    try {
        const deleteJoueur = await prisma.joueur.delete({
            where:{
                id:id
            },
        });
        return deleteJoueur;
    } catch (error) {
        throw new error({message: error.message})
    }
}