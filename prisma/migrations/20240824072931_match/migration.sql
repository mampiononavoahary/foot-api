-- CreateTable
CREATE TABLE "Equipement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "quantite" INTEGER NOT NULL,

    CONSTRAINT "Equipement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetailDeMatch" (
    "id" SERIAL NOT NULL,
    "jourDuMatch" TIMESTAMP(3) NOT NULL,
    "maromaintyBut" INTEGER NOT NULL,
    "adversairreBut" INTEGER NOT NULL,
    "matchId" INTEGER NOT NULL,

    CONSTRAINT "DetailDeMatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "adversairre" TEXT NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DetailDeMatch" ADD CONSTRAINT "DetailDeMatch_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
