-- CreateTable
CREATE TABLE "Skills" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "skillList" TEXT[],

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);
