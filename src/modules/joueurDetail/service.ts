import { prisma } from "src/lib/db"
import { notFoundError } from "src/util/error";
import { createJourDetail } from "./schema";
import { Post } from "@prisma/client";

export const getAllJoueurDetail = async() => {
    try {
        const joueurDetails = await prisma.joueurDetail.findMany();
        if (joueurDetails.length == 0) {
            throw notFoundError("All joueur detail not found");
        }
        return joueurDetails;
    } catch (error) {
        console.log(error.message);
        throw new error({message: error.message})
        
    }
}

export const saveJoueurDetail = async(data: createJourDetail) => {
    try {
        const { image, numero, post, maitriseDePostePercent} = data;
        const createJourDetail = await prisma.joueurDetail.create({
            data: {
                image,
                numero,
                post,
                maitriseDePostePercent
            }
        });
        return createJourDetail;
    } catch (error) {
        console.log(error);
        
        throw new error({message: error.message});
    }
};

export const getJoueurDetailByNumero = async(numero: number) => {
    try {
        const findByNumero = await prisma.joueurDetail.findMany({
            where:{
                numero: numero
            },
            include:{
                joueur:true
            }
        });
        if (findByNumero.length ==0) {
            throw notFoundError(`joueur detail with number${numero} not found`);
        }
        return findByNumero;
    } catch (error) {
        throw new error({message: error.message})
    }
}

export const getJoueurDetailByPost = async(post: Post) => {
    try {
        const findByPost = await prisma.joueurDetail.findMany({
            where:{
                post: post
            },
            include:{
                joueur:true
            }
        });
        if (findByPost.length ==0) {
            throw notFoundError(`joueur detail with post ${post} not found`);
        }
        return findByPost;
    } catch (error) {
        throw new error({message: error.message})
    }
}

export const deleteJoueurDetail = async(id: number) => {
    try {
        const removeDetail = await prisma.joueurDetail.delete({
            where:{
                id: id
            },
        });
        return removeDetail;
    } catch (error) {
        throw new error({message: error.message})
    }
}
