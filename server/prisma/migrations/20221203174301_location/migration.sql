-- CreateEnum
CREATE TYPE "Category" AS ENUM ('SPORT', 'ART', 'ARCHITECTURE');

-- CreateTable
CREATE TABLE "Location" (
    "LocationId" SERIAL NOT NULL,
    "Latitude" INTEGER NOT NULL,
    "Longitude" INTEGER NOT NULL,
    "LocInfoId" INTEGER NOT NULL,
    "Category" "Category" NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("LocationId")
);

-- CreateTable
CREATE TABLE "LocationInfo" (
    "LocInfoId" SERIAL NOT NULL,
    "Year" INTEGER NOT NULL,
    "Description" TEXT NOT NULL,
    "Topic" TEXT NOT NULL,

    CONSTRAINT "LocationInfo_pkey" PRIMARY KEY ("LocInfoId")
);

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_LocInfoId_fkey" FOREIGN KEY ("LocInfoId") REFERENCES "LocationInfo"("LocInfoId") ON DELETE RESTRICT ON UPDATE CASCADE;
