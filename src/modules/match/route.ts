import { FastifyPluginCallback } from "fastify";
import { deleteAMatchHandler, getAllMatchHandler, getMatchByIdHandler, saveMatchHandler } from "./controller";

export const matchRoute:FastifyPluginCallback = (server, _,done) => {
    server.get("/matchs", getAllMatchHandler);
    server.get("/match/:id", getMatchByIdHandler);
    server.post("/matchs", saveMatchHandler);
    server.delete("/match/:id", deleteAMatchHandler);

    done();
}