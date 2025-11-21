/*
  Warnings:

  - You are about to drop the column `logoUrl` on the `Organization` table. All the data in the column will be lost.
  - Added the required column `logo` to the `Organization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "office" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Map" ALTER COLUMN "lat" SET DATA TYPE TEXT,
ALTER COLUMN "lng" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "logoUrl",
ADD COLUMN     "logo" TEXT NOT NULL;
