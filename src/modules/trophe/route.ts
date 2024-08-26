import { FastifyPluginCallback } from "fastify";
import { deleteTropheHandler, getAllTropheHandler, getTropheByNameHandler, saveTropheHandler } from "./controller";

export const tropheRoute:FastifyPluginCallback = (server, _,done) =>{
    server.get("/trophes", getAllTropheHandler);
    server.get("/trophe/:name", getTropheByNameHandler);
    server.post("/tropes", saveTropheHandler);
    server.delete("/trophe/:id", deleteTropheHandler);

    done();
}