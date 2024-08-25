/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Coach` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Coach_email_key" ON "Coach"("email");
