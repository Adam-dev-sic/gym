const express = require("express");
const app = express();
const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();
const cors = require("cors");

app.use(cors());
app.use(express.json());

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

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
