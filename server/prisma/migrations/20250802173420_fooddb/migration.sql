/*
  Warnings:

  - The `foodcalories` column on the `foods` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "foods" DROP COLUMN "foodcalories",
ADD COLUMN     "foodcalories" INTEGER[],
ALTER COLUMN "foodquantity" SET DATA TYPE TEXT[];
