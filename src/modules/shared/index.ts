import { buildJsonSchemas } from "fastify-zod";
import { coach } from "../coach/schema";

export const {schemas, $ref} = buildJsonSchemas({
    ...coach,
  });
  