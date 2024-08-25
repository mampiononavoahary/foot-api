import { buildJsonSchemas } from "fastify-zod";
import { coach } from "../coach/schema";
import { equipement } from "../equipement/schema";

export const {schemas, $ref} = buildJsonSchemas({
    ...coach,
    ...equipement,
  });
  