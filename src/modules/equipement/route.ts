import { FastifyPluginCallback } from "fastify";
import { deleteEquipementHandler, equipementByIdHandler, equipementHandler, saveEquipementHandler } from "./controller";

export const equipementRoute:FastifyPluginCallback = (server, _,done) => {
    server.get("/equipements", equipementHandler);
    server.get("/equipement/:id", equipementByIdHandler);
    server.post("/equipements", saveEquipementHandler);
    server.delete("/equipement/:id", deleteEquipementHandler);

    done();
}