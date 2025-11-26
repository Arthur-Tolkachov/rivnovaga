-- CreateTable
CREATE TABLE "WorkingDaysSchedule" (
    "id" TEXT NOT NULL,
    "start" TEXT NOT NULL,
    "end" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkingDaysSchedule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_workingDaysScheduleId_fkey" FOREIGN KEY ("workingDaysScheduleId") REFERENCES "WorkingDaysSchedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;
