import { FastifyPluginCallback } from "fastify";
import { createJoueurHandler, deleteJoueurHandler, getAllJoueurHandler, getJouerByNameHandler } from "./controller";

export const JoueurRoute:FastifyPluginCallback = (server, _,done) =>{
    server.get("/joueurs", getAllJoueurHandler);
    server.get("/joueur/:name", getJouerByNameHandler);
    server.post("/joueurs", createJoueurHandler);
    server.delete("/joueur:id", deleteJoueurHandler);

    done();
}