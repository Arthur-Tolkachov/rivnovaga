/*
  Warnings:

  - Added the required column `city` to the `Practice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Practice" ADD COLUMN     "city" TEXT NOT NULL;
