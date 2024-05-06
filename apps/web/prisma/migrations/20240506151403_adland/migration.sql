/*
  Warnings:

  - Changed the type of `casterFid` on the `FrameDistribution` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "FrameDistribution" DROP COLUMN "casterFid",
ADD COLUMN     "casterFid" INTEGER NOT NULL;
