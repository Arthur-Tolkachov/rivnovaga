/*
  Warnings:

  - You are about to drop the column `logo` on the `Organization` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "logo";

-- CreateTable
CREATE TABLE "Logo" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,

    CONSTRAINT "Logo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Logo_organizationId_key" ON "Logo"("organizationId");

-- AddForeignKey
ALTER TABLE "Logo" ADD CONSTRAINT "Logo_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
