/*
  Warnings:

  - Added the required column `tropheName` to the `Trophe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trophe" ADD COLUMN     "tropheName" TEXT NOT NULL;
