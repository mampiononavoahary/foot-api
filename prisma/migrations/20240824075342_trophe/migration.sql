/*
  Warnings:

  - Added the required column `qualifiactionName` to the `DetailDeMatch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `JoueurDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DetailDeMatch" ADD COLUMN     "qualifiactionName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "JoueurDetail" ADD COLUMN     "image" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Trophe" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "matchId" INTEGER NOT NULL,

    CONSTRAINT "Trophe_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trophe" ADD CONSTRAINT "Trophe_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
