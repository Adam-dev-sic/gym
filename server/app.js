const express = require("express");
const app = express();
const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/dist")));

// Catch-all: send back React's index.html for any route not handled above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});



app.post("/programs", async (req, res) => {
  const { programname } = req.body;

  const program = await prisma.workouts.create({
    data: {
      programname,
    },
  });
  res.json(program);
});

app.get("/programs", async (req, res) => {
  const programs = await prisma.workouts.findMany();
  sortedPrograms = programs.sort((a, b) => a.id - b.id);
  res.json(sortedPrograms);
});

app.get("/programs/:id", async (req, res) => {
  const { id } = req.params;
  const program = await prisma.workouts.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(program);
});

app.post("/programs/:id", async (req, res) => {
  const { id } = req.params;
  const { workoutname, workoutgif } = req.body;

  const program = await prisma.workouts.findUnique({
    where: { id: parseInt(id) },
  });
  if (!program) {
    return res.status(404).json({ error: "Program not found" });
  }

  if (program.workoutname.includes(workoutname)) {
    return res.status(400).json({ error: "Workout already in program" });
  }

  const updated = await prisma.workouts.update({
    where: { id: parseInt(id) },
    data: {
      workoutname: { set: [...program.workoutname, workoutname] },
      workoutgif: { set: [...program.workoutgif, workoutgif] },
    },
  });

  res.json(updated);
});

app.get("/programs/:id/workouts", async (req, res) => {
  const { id } = req.params;
  const workouts = await prisma.workouts.findUnique({
    where: { id: parseInt(id) },
    include: { workouts: true },
  });
  res.json(workouts);
});

app.delete("/programs/:id", async (req, res) => {
  const { id } = req.params;
  const { workoutname, workoutgif } = req.body;

  // If workoutname and workoutgif are provided, remove just that workout
  if (workoutname && workoutgif) {
    const program = await prisma.workouts.findUnique({
      where: { id: parseInt(id) },
    });
    if (!program) {
      return res.status(404).json({ error: "Program not found" });
    }

    const nameIndex = program.workoutname.findIndex(
      (name, i) => name === workoutname && program.workoutgif[i] === workoutgif
    );
    if (nameIndex === -1) {
      return res.status(404).json({ error: "Workout not found in program" });
    }

    const newWorkoutNames = [...program.workoutname];
    const newWorkoutGifs = [...program.workoutgif];
    newWorkoutNames.splice(nameIndex, 1);
    newWorkoutGifs.splice(nameIndex, 1);

    const updated = await prisma.workouts.update({
      where: { id: parseInt(id) },
      data: {
        workoutname: { set: newWorkoutNames },
        workoutgif: { set: newWorkoutGifs },
      },
    });

    return res.json(updated);
  } else {
    await prisma.workouts.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  }
});

app.delete("/programs", async (req, res) => {
  const { id } = req.body;
  await prisma.workouts.delete({
    where: { id: parseInt(id) },
  });
});

app.post("/foodprograms", async (req, res) => {
  const { foodprogramname } = req.body;
  const foodProgram = await prisma.foods.create({
    data: {
      foodprogramname,
    },
  });
  res.json(foodProgram);
});

app.get("/foodprograms", async (req, res) => {
  const foodPrograms = await prisma.foods.findMany();
  sortedFoodPrograms = foodPrograms.sort((a, b) => a.id - b.id);
  res.json(sortedFoodPrograms);
});

app.delete("/foodprograms", async (req, res) => {
  const { id } = req.body;
  await prisma.foods.delete({
    where: { id: parseInt(id) },
  });
  res.status(204).send();
});

app.get("/foodprograms/:id", async (req, res) => {
  const { id } = req.params;
  const foodProgram = await prisma.foods.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(foodProgram);
});

app.post("/foodprograms/:id", async (req, res) => {
  const { id } = req.params;
  const { foodname, foodpic, foodquantity, foodcalories, foodprotein } =
    req.body;
  const foodProgram = await prisma.foods.findUnique({
    where: { id: parseInt(id) },
  });
  if (!foodProgram) {
    return res.status(404).json({ error: "Food program not found" });
  }
  if (foodProgram.foodname.includes(foodname)) {
    return res.status(400).json({ error: "Food already in program" });
  }
  const updated = await prisma.foods.update({
    where: { id: parseInt(id) },
    data: {
      foodname: { set: [...(foodProgram.foodname || []), foodname] },
      foodpic: { set: [...(foodProgram.foodpic || []), foodpic] },
      foodquantity: {
        set: [...(foodProgram.foodquantity || []), foodquantity],
      },
      foodcalories: {
        set: [...(foodProgram.foodcalories || []), foodcalories],
      },
      foodprotein: { set: [...(foodProgram.foodprotein || []), foodprotein] },
    },
  });
  res.json(updated);
});

app.get("/foodprograms/:id", async (req, res) => {
  const { id } = req.params;
  const foods = await prisma.foods.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(foods);
});

app.delete("/foodprograms/:id", async (req, res) => {
  const { id } = req.params;
  const { foodname } = req.body;
  const foodProgram = await prisma.foods.findUnique({
    where: { id: parseInt(id) },
  });
  if (!foodProgram) {
    return res.status(404).json({ error: "Food program not found" });
  }
  const nameIndex = foodProgram.foodname.indexOf(foodname);
  if (nameIndex === -1) {
    return res.status(404).json({ error: "Food not found in program" });
  }
  const newFoodNames = [...foodProgram.foodname];
  const newFoodPics = [...(foodProgram.foodpic || [])];
  const newFoodQuantities = [...(foodProgram.foodquantity || [])];
  const newFoodCalories = [...(foodProgram.foodcalories || [])];
  const newFoodProteins = [...(foodProgram.foodprotein || [])];
  newFoodNames.splice(nameIndex, 1);
  newFoodPics.splice(nameIndex, 1);
  newFoodQuantities.splice(nameIndex, 1);
  newFoodCalories.splice(nameIndex, 1);
  newFoodProteins.splice(nameIndex, 1);
  const updated = await prisma.foods.update({
    where: { id: parseInt(id) },
    data: {
      foodname: { set: newFoodNames },
      foodpic: { set: newFoodPics },
      foodquantity: { set: newFoodQuantities },
      foodcalories: { set: newFoodCalories },
      foodprotein: { set: newFoodProteins },
    },
  });
  res.json(updated);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
