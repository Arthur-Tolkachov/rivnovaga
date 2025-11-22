/*
  Warnings:

  - You are about to drop the column `organizationId` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `Map` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `WorkingDaysSchedule` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `WorkingTimeSchedule` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[end]` on the table `WorkingTimeSchedule` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Address_organizationId_key";

-- DropIndex
DROP INDEX "Map_organizationId_key";

-- DropIndex
DROP INDEX "WorkingDaysSchedule_organizationId_key";

-- DropIndex
DROP INDEX "WorkingTimeSchedule_organizationId_key";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "organizationId";

-- AlterTable
ALTER TABLE "Map" DROP COLUMN "organizationId";

-- AlterTable
ALTER TABLE "WorkingDaysSchedule" DROP COLUMN "organizationId";

-- AlterTable
ALTER TABLE "WorkingTimeSchedule" DROP COLUMN "organizationId";

-- CreateIndex
CREATE UNIQUE INDEX "WorkingTimeSchedule_end_key" ON "WorkingTimeSchedule"("end");
