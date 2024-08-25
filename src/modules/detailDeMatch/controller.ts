import { FastifyReply, FastifyRequest } from "fastify";
import { deleteDetailMatch, getAllDetailMatch, getDetailMatchById, saveDetailMatch } from "./service";
import { createDetailMatch } from "./schema";

export const getAllDetailMatchHandler = async(req:FastifyRequest, res:FastifyReply) =>{
    try {
        const allDetailMatch = await getAllDetailMatch();
        res.status(200).send(allDetailMatch);
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

export const getDetailMatchByIdHandler = async(req:FastifyRequest, res:FastifyReply) =>{
    try {
        const {id} = req.params as {id: string};
        const detailDeMatch = await getDetailMatchById(parseInt(id, 10));
        if (!detailDeMatch) {
            res.status(404).send(`detail match with id ${id} not found`)
        }
        res.status(200).send(detailDeMatch);
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

export const saveDetailMatchHandler = async(req:FastifyRequest, res:FastifyReply) =>{
    try {
        const data:createDetailMatch = req.body as createDetailMatch
        const detailDeMatch = await saveDetailMatch(data);
        res.status(201).send(detailDeMatch);
    } catch (error) {
        res.status(500).send({message: error});
        console.log(error);
        
    }
}

export const deleteDetaiMatchHandler = async(req:FastifyRequest, res:FastifyReply) =>{
    try {
        const {id} = req.params as {id: string};
        const deleteDetail = await deleteDetailMatch(parseInt(id));
        res.send(deleteDetail);
    } catch (error) {
        res.status(500).send("Internel server error");
    }
}