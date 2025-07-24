-- CreateTable
CREATE TABLE "workouts" (
    "id" SERIAL NOT NULL,
    "programname" TEXT NOT NULL,
    "workoutname" TEXT NOT NULL,
    "workoutgif" TEXT NOT NULL,

    CONSTRAINT "workouts_pkey" PRIMARY KEY ("id")
);
