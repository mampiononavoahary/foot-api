import {string, z} from "zod";

export const PostEnum = z.enum(
   [ "GARDIEN_DE_BUT",
   "ARRIERE_LATERAL",
    "STOPPEUR",
    "LIBERO",
    "MILIEU_DEFENSIF",
   "MILIEU_OFFENSIF",
    "ATTAQUANT",
    "AVANT_CENTRE",
    "REMPLACANT"]
);

export type CreatePost = z.infer<typeof PostEnum>;

export const post = {
    PostEnum
};

