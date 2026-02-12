-- CreateTable
CREATE TABLE "CategoryCover" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "CategoryCover_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategoryCover_categoryId_key" ON "CategoryCover"("categoryId");

-- AddForeignKey
ALTER TABLE "CategoryCover" ADD CONSTRAINT "CategoryCover_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
