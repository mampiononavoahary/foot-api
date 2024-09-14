import { FastifyPluginCallback } from "fastify";
import { deleteJoueurDetailHandler, findByNumeroHandler, findByPostHandler, getAllJoueurDetailHandler, saveDetailJoueurHandler } from "./controller";

export const joueurDetailRoute: FastifyPluginCallback = (server, _, done) => {
    server.get("/joueurdetails", getAllJoueurDetailHandler);
    server.get("/joueurdetail/post/:post", findByPostHandler);  // Préfixe "post"
    server.get("/joueurdetail/numero/:numero", findByNumeroHandler);  // Préfixe "numero"
    server.post("/joueurdetails", saveDetailJoueurHandler);
    server.delete("/joueurdetail/:id", deleteJoueurDetailHandler);

    done();
}
