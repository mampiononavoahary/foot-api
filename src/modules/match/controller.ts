import { FastifyReply, FastifyRequest } from "fastify";
import { deleteMatch, getAllMatch, getMatchById, saveMatch } from "./service";
import { createMatch } from "./schema";

export const getAllMatchHandler = async(req:FastifyRequest, res:FastifyReply) => {
    try {
        const AllMatch = await getAllMatch();
        if (!AllMatch) {
            res.status(404).send("All Match not found");
        }
        res.status(200).send(AllMatch);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}

export const getMatchByIdHandler = async(req:FastifyRequest, res:FastifyReply) =>{
    try {
        const {id} = req.params as {id: string};
        const getMatch = await getMatchById(parseInt(id,10));

        if (!getMatch) {
            res.status(404).send(`Match with ${id} not found`);
        }
        res.status(200).send(getMatch);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}

export const saveMatchHandler = async(req:FastifyRequest, res:FastifyReply) =>{
    try {
        const data:createMatch = req.body as createMatch;
        const newMatch = await saveMatch(data);
        if (!newMatch) {
            res.status(401).send("Failed to create a match");
        }
        res.status(201).send(newMatch);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}

export const deleteAMatchHandler = async(req:FastifyRequest,res:FastifyReply) =>{
    try {
        const {id} = req.params as {id:string};
        const removeMatch = await deleteMatch(parseInt(id,10));

        if (!removeMatch) {
            res.status(401).send("Failed to delete a Match");
        }
        res.status(200).send(removeMatch);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}