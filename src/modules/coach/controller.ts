import { createCoach } from "./schema";
import { deleteCoach, getAllCoach, getCoachById, saveCoach, updateCoach } from "./service"
import { FastifyRequest, FastifyReply } from "fastify";// Importez votre service

export const getCoachByIdHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const { id } = request.params as { id: string};  // Récupère l'ID à partir des paramètres de la requête
        const coach = await getCoachById(parseInt(id));

        if (!coach) {
            reply.status(404).send({ message: `Coach with ID ${id} not found.` });
        } else {
            reply.send(coach);
        }
    } catch (error) {
        reply.status(500).send({ message: error.message });
    }
};


export const getCoachHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const coaches = await getAllCoach();  // Récupère tous les coachs
        reply.send(coaches);
        
    } catch (error) {
        reply.status(500).send({ message: error.message });
    }
};

export const saveCoachHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const data: createCoach = request.body as createCoach;

        const newCoach = await saveCoach(data);
        reply.status(201).send(newCoach);
    } catch (error) {
        reply.status(500).send({ message: error.message });
    }
};

export const deleteCoachHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const { id } = request.params as { id: string };

        const deletedCoach = await deleteCoach(parseInt(id, 10));
        reply.send(deletedCoach);
    } catch (error) {
        reply.status(500).send({ message: error.message });
    }
};