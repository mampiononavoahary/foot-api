import fastify from "fastify";
import cors from "@fastify/cors";
import {schemas} from "./modules/shared";
import { coachRoute } from "./modules/coach";

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

  server.register(coachRoute);

  return server;
}