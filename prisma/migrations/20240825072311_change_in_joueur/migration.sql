/*
  Warnings:

  - You are about to drop the column `joueurId` on the `JoueurDetail` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "JoueurDetail" DROP CONSTRAINT "JoueurDetail_joueurId_fkey";

-- AlterTable
ALTER TABLE "Joueur" ADD COLUMN     "joueurDetail" INTEGER;

-- AlterTable
ALTER TABLE "JoueurDetail" DROP COLUMN "joueurId";

-- AddForeignKey
ALTER TABLE "Joueur" ADD CONSTRAINT "Joueur_joueurDetail_fkey" FOREIGN KEY ("joueurDetail") REFERENCES "JoueurDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;
