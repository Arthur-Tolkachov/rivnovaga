/*
  Warnings:

  - You are about to drop the column `organizationId` on the `Logo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[logoId]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[addressId]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mapId]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[workingDaysScheduleId]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[workingTimeScheduleId]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "Logo" DROP CONSTRAINT "Logo_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "Map" DROP CONSTRAINT "Map_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "WorkingDaysSchedule" DROP CONSTRAINT "WorkingDaysSchedule_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "WorkingTimeSchedule" DROP CONSTRAINT "WorkingTimeSchedule_organizationId_fkey";

-- DropIndex
DROP INDEX "Logo_organizationId_key";

-- AlterTable
ALTER TABLE "Logo" DROP COLUMN "organizationId";

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "addressId" TEXT,
ADD COLUMN     "logoId" TEXT,
ADD COLUMN     "mapId" TEXT,
ADD COLUMN     "workingDaysScheduleId" TEXT,
ADD COLUMN     "workingTimeScheduleId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Organization_logoId_key" ON "Organization"("logoId");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_addressId_key" ON "Organization"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_mapId_key" ON "Organization"("mapId");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_workingDaysScheduleId_key" ON "Organization"("workingDaysScheduleId");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_workingTimeScheduleId_key" ON "Organization"("workingTimeScheduleId");

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_logoId_fkey" FOREIGN KEY ("logoId") REFERENCES "Logo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_workingDaysScheduleId_fkey" FOREIGN KEY ("workingDaysScheduleId") REFERENCES "WorkingDaysSchedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_workingTimeScheduleId_fkey" FOREIGN KEY ("workingTimeScheduleId") REFERENCES "WorkingTimeSchedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;
