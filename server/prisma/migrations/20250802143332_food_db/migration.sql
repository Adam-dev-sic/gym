-- CreateTable
CREATE TABLE "foods" (
    "id" SERIAL NOT NULL,
    "foodname" TEXT NOT NULL,
    "foodpic" TEXT NOT NULL,
    "foodcalories" INTEGER NOT NULL,
    "foodprotein" INTEGER NOT NULL,
    "foodquantity" INTEGER NOT NULL,

    CONSTRAINT "foods_pkey" PRIMARY KEY ("id")
);
