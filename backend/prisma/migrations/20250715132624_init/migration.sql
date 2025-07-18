/*
  Warnings:

  - You are about to drop the column `aadhaarNumber` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `commissionRate` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `deletedBy` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `gstin` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `panNumber` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `referralCode` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `totalEarnings` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `totalReviews` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `verifiedAt` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `verifiedBy` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `deletedBy` on the `User` table. All the data in the column will be lost.
  - The `status` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[clerkId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `passwordHash` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_userId_fkey";

-- DropIndex
DROP INDEX "Agent_gstin_key";

-- DropIndex
DROP INDEX "Agent_referralCode_key";

-- AlterTable
ALTER TABLE "Agent" DROP COLUMN "aadhaarNumber",
DROP COLUMN "commissionRate",
DROP COLUMN "deletedAt",
DROP COLUMN "deletedBy",
DROP COLUMN "gstin",
DROP COLUMN "panNumber",
DROP COLUMN "rating",
DROP COLUMN "referralCode",
DROP COLUMN "status",
DROP COLUMN "totalEarnings",
DROP COLUMN "totalReviews",
DROP COLUMN "verifiedAt",
DROP COLUMN "verifiedBy";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "deletedAt",
DROP COLUMN "deletedBy",
ADD COLUMN     "clerkId" TEXT,
ADD COLUMN     "passwordHash" TEXT NOT NULL,
ALTER COLUMN "dateOfBirth" SET DATA TYPE TIMESTAMP(3),
DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'active';

-- DropTable
DROP TABLE "Customer";

-- DropEnum
DROP TYPE "UserStatus";

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");
