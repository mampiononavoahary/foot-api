/*
  Warnings:

  - Added the required column `maitriseDePostePercent` to the `JoueurDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JoueurDetail" ADD COLUMN     "maitriseDePostePercent" INTEGER NOT NULL;
