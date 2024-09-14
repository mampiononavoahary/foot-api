import { FastifyReply, FastifyRequest } from "fastify";
import { deleteJoueurDetail, getAllJoueurDetail, getJoueurDetailByNumero, getJoueurDetailByPost, saveJoueurDetail } from "./service";
import { createJourDetail } from "./schema";
import { Post } from "@prisma/client";

export const getAllJoueurDetailHandler = async(req:FastifyRequest, res:FastifyReply) => {
    try {
        const AllJoueurDetail = await getAllJoueurDetail();
        if (AllJoueurDetail.length == 0) {
            res.status(404).send('Detail Jouer not found');
        }
        res.status(200).send(AllJoueurDetail);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

export const saveDetailJoueurHandler = async(req: FastifyRequest, res:FastifyReply) => {
    try {
        const data:createJourDetail = req.body as createJourDetail;
        const newDetailJoueur = await saveJoueurDetail(data);
        res.status(201).send(`Detail joueur with number ${newDetailJoueur.numero} created successfuly`)
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

export const findByNumeroHandler = async(req:FastifyRequest, res:FastifyReply) =>{
    try {
        const {numero} = req.params as {numero: string};
        const detail = await getJoueurDetailByNumero(parseInt(numero,10));

        if (detail.length == 0) {
            res.status(404).send(`detail joueur with numero ${numero} not found`);
        }
        res.status(200).send(detail);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}

export const findByPostHandler = async(req:FastifyRequest, res:FastifyReply) =>{
    try {
        const {post} = req.params as {post:Post};
        const detail = await getJoueurDetailByPost(post);
        if (detail.length == 0) {
            res.status(404).send(`detail joueur with post ${post} not found`);
        }
        res.status(200).send(detail);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}

export const deleteJoueurDetailHandler = async(req:FastifyRequest, res:FastifyReply) =>{
    try {
        const {id} = req.params as {id: string};
        const deleteDetailJoueur = await deleteJoueurDetail(parseInt(id));
        res.status(206).send(deleteDetailJoueur);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}