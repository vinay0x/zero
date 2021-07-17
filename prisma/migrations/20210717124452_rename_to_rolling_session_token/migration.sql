/*
  Warnings:

  - You are about to drop the column `rollingToken` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[rollingSessiontoken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User.rollingToken_unique";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "rollingToken",
ADD COLUMN     "rollingSessiontoken" TEXT NOT NULL DEFAULT gen_random_uuid();

-- CreateIndex
CREATE UNIQUE INDEX "User.rollingSessiontoken_unique" ON "User"("rollingSessiontoken");
