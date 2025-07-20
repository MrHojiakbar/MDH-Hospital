/*
  Warnings:

  - You are about to alter the column `carNumber` on the `Ambulance` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `phoneNumber` on the `Ambulance` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `fullname` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(150)`.
  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(150)`.
  - You are about to alter the column `phoneNumber` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - Added the required column `imageUrl` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ambulance" ALTER COLUMN "carNumber" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "phoneNumber" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "imageUrl" VARCHAR(150) NOT NULL,
ALTER COLUMN "fullname" SET DATA TYPE VARCHAR(150),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(150),
ALTER COLUMN "phoneNumber" SET DATA TYPE VARCHAR(50);
