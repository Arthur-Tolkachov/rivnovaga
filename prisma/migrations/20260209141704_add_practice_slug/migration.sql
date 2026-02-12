/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Practice` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Practice" ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Practice_slug_key" ON "Practice"("slug");
