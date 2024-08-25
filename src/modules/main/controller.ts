import { FastifyReply, FastifyRequest } from "fastify";

export const getMainHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        var main = "Hello world";  // Récupère tous les coachs
        reply.send(main);
        console.log(main);
        
    } catch (error) {
        reply.status(500).send({ message: error.message });
    }
};