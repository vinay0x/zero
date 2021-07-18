-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Manager', 'Regular');

-- AlterTable
ALTER TABLE "Membership" ADD COLUMN     "role" "Role" NOT NULL DEFAULT E'Regular';
