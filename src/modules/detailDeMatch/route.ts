import { FastifyPluginCallback } from "fastify";
import { deleteDetaiMatchHandler, getAllDetailMatchHandler, getDetailMatchByIdHandler, saveDetailMatchHandler } from "./controller";

export const detailMatchRoute:FastifyPluginCallback = (server, _,done) =>{
    server.get("/detailmatchs", getAllDetailMatchHandler);
    server.get("/detailmatch/:id", getDetailMatchByIdHandler);
    server.post("/detailmatch", saveDetailMatchHandler);
    server.delete("/detailmatch/:id", deleteDetaiMatchHandler);

    done();
}