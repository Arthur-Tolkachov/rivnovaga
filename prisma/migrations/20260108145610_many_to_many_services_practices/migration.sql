/*
  Warnings:

  - You are about to drop the column `serviceId` on the `Practice` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Practice" DROP CONSTRAINT "Practice_serviceId_fkey";

-- AlterTable
ALTER TABLE "Practice" DROP COLUMN "serviceId";

-- CreateTable
CREATE TABLE "_PracticeToService" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PracticeToService_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PracticeToService_B_index" ON "_PracticeToService"("B");

-- AddForeignKey
ALTER TABLE "_PracticeToService" ADD CONSTRAINT "_PracticeToService_A_fkey" FOREIGN KEY ("A") REFERENCES "Practice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PracticeToService" ADD CONSTRAINT "_PracticeToService_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
