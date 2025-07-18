-- CreateTable
CREATE TABLE "Trip" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "agentId" TEXT NOT NULL,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
