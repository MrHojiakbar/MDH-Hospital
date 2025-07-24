/*
  Warnings:

  - The values [PENDING,MISSED] on the enum `ambulanceStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ambulanceStatus_new" AS ENUM ('AVAILABLE', 'ASSIGNED', 'COMPLETED', 'CANCELLED');
ALTER TABLE "Ambulance" ALTER COLUMN "status" TYPE "ambulanceStatus_new" USING ("status"::text::"ambulanceStatus_new");
ALTER TYPE "ambulanceStatus" RENAME TO "ambulanceStatus_old";
ALTER TYPE "ambulanceStatus_new" RENAME TO "ambulanceStatus";
DROP TYPE "ambulanceStatus_old";
COMMIT;
