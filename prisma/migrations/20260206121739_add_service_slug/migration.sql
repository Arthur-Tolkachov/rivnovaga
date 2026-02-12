/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Service` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Service` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Service_title_key" ON "Service"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Service_slug_key" ON "Service"("slug");
