/*
  Warnings:

  - Added the required column `description` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Category_title_key";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "description" TEXT NOT NULL;
