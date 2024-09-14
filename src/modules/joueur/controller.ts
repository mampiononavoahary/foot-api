import { FastifyReply, FastifyRequest } from "fastify";
import { deleteJoueur, getAllJoueur, getJoueursByName, saveJoueur } from "./service";
import { createJoueur } from "./schema";

export const getAllJoueurHandler = async(req:FastifyRequest, res:FastifyReply) =>{
    try {
        const joueurs = await getAllJoueur();
        if (joueurs.length ==0) {
            res.status(404).send("All joueurs not found");
        }
        res.status(200).send(joueurs);
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

export const createJoueurHandler = async(req: FastifyRequest, res: FastifyReply) => {
    try {
        const data:createJoueur = req.body as createJoueur;
        const newJoueur = await saveJoueur(data);
        res.status(201).send(newJoueur);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

export const getJouerByNameHandler = async(req:FastifyRequest, res:FastifyReply) =>{
    try {
        const {name} = req.params as {name: string};
        const joueur = await getJoueursByName(name);
        if (joueur.length == 0) {
            res.status(404).send(`joueur with name ${name} not found`);
        }
        res.status(200).send(joueur);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

export const deleteJoueurHandler = async(req:FastifyRequest, res:FastifyReply) =>{
    try {
        const {id} = req.params as {id: string};
        const deleted = await deleteJoueur(parseInt(id));
        res.status(204).send(deleted);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};
