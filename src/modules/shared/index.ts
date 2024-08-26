import { buildJsonSchemas } from "fastify-zod";
import { coach } from "../coach/schema";
import { equipement } from "../equipement/schema";
import { detailMatch } from "../detailDeMatch/schema";
import { match } from "../match/schema";
import { trophe } from "../trophe/schema";

export const {schemas, $ref} = buildJsonSchemas({
    ...coach,
    ...equipement,
    ...detailMatch,
    ...match,
    ...trophe
  });
  