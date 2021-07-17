/*
  Warnings:

  - A unique constraint covering the columns `[rollingToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "rollingToken" TEXT NOT NULL DEFAULT gen_random_uuid();

-- CreateIndex
CREATE UNIQUE INDEX "User.rollingToken_unique" ON "User"("rollingToken");
