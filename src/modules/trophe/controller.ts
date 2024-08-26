import { FastifyReply, FastifyRequest } from "fastify";
import { deleteTrophe, getAllTrophe, getTropheByName, saveTrophe } from "./service";
import { createTrophe } from "./schema";

export const getAllTropheHandler = async(req:FastifyRequest, res: FastifyReply)=>{
    try {
        const allTrophe = await getAllTrophe();
        if (!allTrophe) {
            res.status(404).send("All trophe not found");
        }
        res.status(200).send(allTrophe);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const getTropheByNameHandler = async(req:FastifyRequest, res:FastifyReply)=>{
    try {
        const {name} = req.params as {name:string};
        const trophe = await getTropheByName(name);
        if (!trophe) {
            res.status(404).send(`trophe with name ${name} not found`);
        }
        res.status(200).send(trophe);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const saveTropheHandler = async(req:FastifyRequest, res:FastifyReply) =>{
    try {
        const data:createTrophe = req.body as createTrophe;
        const newTrophe = await saveTrophe(data);

        if (!newTrophe) {
            res.status(401).send(`trophe not created`);
        }
        res.status(200).send(newTrophe);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const deleteTropheHandler = async(req:FastifyRequest, res:FastifyReply)=>{
    try {
        const {id} = req.params as {id: string};
        const tropheDelete = await deleteTrophe(parseInt(id));
        res.status(200).send(tropheDelete);
    } catch (error) {
        res.status(500).send(error.message);
    }
}