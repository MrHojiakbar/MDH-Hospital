/*
  Warnings:

  - Added the required column `userId` to the `Schedules` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Schedules" DROP CONSTRAINT "Schedules_doctorId_fkey";

-- AlterTable
ALTER TABLE "Schedules" ADD COLUMN     "userId" UUID NOT NULL,
ALTER COLUMN "doctorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Schedules" ADD CONSTRAINT "Schedules_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedules" ADD CONSTRAINT "Schedules_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
