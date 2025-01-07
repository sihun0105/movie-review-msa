-- CreateTable
CREATE TABLE "MovieVector" (
    "id" SERIAL NOT NULL,
    "movieCd" INTEGER NOT NULL,
    "vector" DOUBLE PRECISION[],
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MovieVector_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MovieVector_movieCd_key" ON "MovieVector"("movieCd");
