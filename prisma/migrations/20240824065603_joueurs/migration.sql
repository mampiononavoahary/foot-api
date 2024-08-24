-- CreateEnum
CREATE TYPE "Post" AS ENUM ('GARDIEN_DE_BUT', 'ARRIERE_LATERAL', 'STOPPEUR', 'LIBERO', 'MILIEU_DEFENSIF', 'MILIEU_OFFENSIF', 'ATTAQUANT', 'AVANT_CENTRE', 'REMPLACANT');

-- CreateTable
CREATE TABLE "JoueurDetail" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "post" "Post" NOT NULL DEFAULT 'REMPLACANT',
    "joueurId" INTEGER NOT NULL,

    CONSTRAINT "JoueurDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Joueur" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "prenoms" TEXT,
    "dateDeNaissance" TIMESTAMP(3) NOT NULL,
    "address" TEXT,
    "contact" TEXT NOT NULL,

    CONSTRAINT "Joueur_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JoueurDetail_numero_key" ON "JoueurDetail"("numero");

-- AddForeignKey
ALTER TABLE "JoueurDetail" ADD CONSTRAINT "JoueurDetail_joueurId_fkey" FOREIGN KEY ("joueurId") REFERENCES "Joueur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
