-- CreateTable
CREATE TABLE "Frame" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Frame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FrameDistribution" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "casterFid" TEXT NOT NULL,
    "interactions" INTEGER NOT NULL,
    "frameId" TEXT,

    CONSTRAINT "FrameDistribution_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FrameDistribution" ADD CONSTRAINT "FrameDistribution_frameId_fkey" FOREIGN KEY ("frameId") REFERENCES "Frame"("id") ON DELETE SET NULL ON UPDATE CASCADE;
