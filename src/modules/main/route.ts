import { FastifyPluginCallback } from "fastify"
import {getMainHandler } from "./controller"
export const defaultRoute : FastifyPluginCallback = (server, _,done)=> {
    server.get("/", getMainHandler)
     
    done()
}