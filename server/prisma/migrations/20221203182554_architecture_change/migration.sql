/*
  Warnings:

  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LocationInfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_LocInfoId_fkey";

-- DropTable
DROP TABLE "Location";

-- DropTable
DROP TABLE "LocationInfo";

-- DropEnum
DROP TYPE "Category";

-- CreateTable
CREATE TABLE "Checkpoint" (
    "CheckpointID" SERIAL NOT NULL,
    "Latitude" INTEGER NOT NULL,
    "Longitude" INTEGER NOT NULL,
    "Category" TEXT NOT NULL,

    CONSTRAINT "Checkpoint_pkey" PRIMARY KEY ("CheckpointID")
);

-- CreateTable
CREATE TABLE "CheckPointInfo" (
    "id" SERIAL NOT NULL,
    "Year" INTEGER NOT NULL,
    "Description" TEXT NOT NULL,
    "Topic" TEXT NOT NULL,
    "CheckpointID" INTEGER,

    CONSTRAINT "CheckPointInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CheckPointInfo" ADD CONSTRAINT "CheckPointInfo_CheckpointID_fkey" FOREIGN KEY ("CheckpointID") REFERENCES "Checkpoint"("CheckpointID") ON DELETE SET NULL ON UPDATE CASCADE;
