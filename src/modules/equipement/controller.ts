import { FastifyReply, FastifyRequest } from "fastify";
import { deleteEquipement, getAllEquipement, getAllEquipementById, saveEquipement } from "./service";
import { createEquipement } from "./schema";

export const equipementHandler = async(req:FastifyRequest, res:FastifyReply) =>{
    try {
        const equipements = await getAllEquipement();
        res.send(equipements);

    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

export const equipementByIdHandler = async(req:FastifyRequest, res:FastifyReply) =>{
    try {
        const { id } = req.params as {id: string};
        const equipement = await getAllEquipementById(parseInt(id));

        if (!equipement) {
            res.status(404).send({message: `equipement with id ${id} not found`})
        } else {
            res.status(200).send(equipement)
        }
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

export const saveEquipementHandler = async(req: FastifyRequest, res:FastifyReply) =>{
    try {
        const data:createEquipement = req.body as createEquipement;

        const newEquipemet = await saveEquipement(data);
        res.status(201).send(newEquipemet);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

export const deleteEquipementHandler = async(req:FastifyRequest, res:FastifyReply) =>{
    try {
        const {id} = req.params as {id: string};

        const deleteEquipements = await deleteEquipement(parseInt(id, 10));
        res.send(deleteEquipements);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}