/*
  Warnings:

  - You are about to drop the column `matchId` on the `DetailDeMatch` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "DetailDeMatch" DROP CONSTRAINT "DetailDeMatch_matchId_fkey";

-- DropForeignKey
ALTER TABLE "Trophe" DROP CONSTRAINT "Trophe_matchId_fkey";

-- AlterTable
ALTER TABLE "DetailDeMatch" DROP COLUMN "matchId";

-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "detailDeMatch" INTEGER;

-- AlterTable
ALTER TABLE "Trophe" ALTER COLUMN "matchId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Trophe" ADD CONSTRAINT "Trophe_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_detailDeMatch_fkey" FOREIGN KEY ("detailDeMatch") REFERENCES "DetailDeMatch"("id") ON DELETE SET NULL ON UPDATE CASCADE;
