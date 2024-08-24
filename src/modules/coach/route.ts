import { FastifyPluginCallback } from "fastify"
import { deleteCoachHandler, getCoachByIdHandler, getCoachHandler, saveCoachHandler } from "./controller"
export const coachRoute : FastifyPluginCallback = (server, _,done)=> {
    server.get("/coachs", getCoachHandler)
    server.get("/coach/:id", getCoachByIdHandler)
     server.post("/coachs", saveCoachHandler);
     server.delete("/coachs/:id", deleteCoachHandler);
     
    done()
}