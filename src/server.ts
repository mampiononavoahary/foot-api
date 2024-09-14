import fastify from "fastify";
import cors from "@fastify/cors";
import {schemas} from "./modules/shared";
import { coachRoute } from "./modules/coach";
import { defaultRoute } from "./modules/main";
import { equipementRoute } from "./modules/equipement";
import { detailMatchRoute } from "./modules/detailDeMatch";
import { matchRoute } from "./modules/match";
import { tropheRoute } from "./modules/trophe";
import { joueurDetailRoute } from "./modules/joueurDetail";
import { JoueurRoute } from "./modules/joueur/route";

const DEFAULT_OPTIONS = {};

export const buildServer = (opts: Record<string, unknown> = {}) => {
  const server = fastify({
    ...DEFAULT_OPTIONS,
    ...opts,
  });

  schemas.forEach((schema) => {
    server.addSchema(schema);
  });
  
  server.register(cors);

  server.register(defaultRoute)
  server.register(coachRoute);
  server.register(equipementRoute);
  server.register(detailMatchRoute);
  server.register(matchRoute);
  server.register(tropheRoute);
  server.register(joueurDetailRoute);
  server.register(JoueurRoute);

  return server;
}