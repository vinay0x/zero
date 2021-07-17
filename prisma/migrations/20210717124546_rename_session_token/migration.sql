/*
  Warnings:

  - You are about to drop the column `rollingSessiontoken` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sessionToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User.rollingSessiontoken_unique";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "rollingSessiontoken",
ADD COLUMN     "sessionToken" TEXT NOT NULL DEFAULT gen_random_uuid();

-- CreateIndex
CREATE UNIQUE INDEX "User.sessionToken_unique" ON "User"("sessionToken");
