/*
  Warnings:

  - The `workoutname` column on the `workouts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `workoutgif` column on the `workouts` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "workouts" DROP COLUMN "workoutname",
ADD COLUMN     "workoutname" TEXT[],
DROP COLUMN "workoutgif",
ADD COLUMN     "workoutgif" TEXT[];
