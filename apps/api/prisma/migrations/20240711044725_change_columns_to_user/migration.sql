/*
  Warnings:

  - You are about to drop the column `age` on the `patients` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `patients` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `servers` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `servers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "patients" DROP COLUMN "age",
DROP COLUMN "gender";

-- AlterTable
ALTER TABLE "servers" DROP COLUMN "age",
DROP COLUMN "gender";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "gender" "Gender";
