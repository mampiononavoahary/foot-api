/*
  Warnings:

  - You are about to drop the column `qualifiactionName` on the `DetailDeMatch` table. All the data in the column will be lost.
  - Added the required column `qualificationName` to the `DetailDeMatch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DetailDeMatch" DROP COLUMN "qualifiactionName",
ADD COLUMN     "qualificationName" TEXT NOT NULL;
