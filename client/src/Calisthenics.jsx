import { Link } from "react-router-dom";
import { useState } from "react";

const calisthenicsWorkouts = [
  {
    id: "back-extension",
    img: "calisthenics/Back/Back Extension.gif",
    label: "Back Extension",
  },
  {
    id: "full-planche",
    img: "calisthenics/Shoulder/Full Planche.gif",
    label: "Full Planche",
  },
  {
    id: "handstand-hold",
    img: "calisthenics/Shoulder/Handstand Hold.gif",
    label: "Handstand Hold",
  },
  {
    id: "pike-push-up-shoulder",
    img: "calisthenics/Shoulder/Pike Push-Up.gif",
    label: "Pike Push-Up",
  },
  {
    id: "handstand-push-up",
    img: "calisthenics/Shoulder/Handstand Push-Up.gif",
    label: "Handstand Push-Up",
  },
  {
    id: "pike-push-up-between-benches-shoulder",
    img: "calisthenics/Shoulder/Pike Push-Up Between Benches.gif",
    label: "Pike Push-Up Between Benches",
  },
  {
    id: "arm-circles",
    img: "calisthenics/Shoulder/Arm Circles.gif",
    label: "Arm Circles",
  },
  {
    id: "clap-push-up",
    img: "calisthenics/Chest/Clap Push-Up.gif",
    label: "Clap Push-Up",
  },
  {
    id: "archer-push-up",
    img: "calisthenics/Chest/Archer Push-Up.gif",
    label: "Archer Push-Up",
  },
  {
    id: "cobra-push-up",
    img: "calisthenics/Chest/Cobra Push-Up.gif",
    label: "Cobra Push-Up",
  },
  {
    id: "chest-dips",
    img: "calisthenics/Chest/Chest Dips.gif",
    label: "Chest Dips",
  },
  {
    id: "resistance-band-push-up",
    img: "calisthenics/Chest/Resistance Band Push-Up.gif",
    label: "Resistance Band Push-Up",
  },
  {
    id: "weighted-push-up",
    img: "calisthenics/Chest/Weighted Push-Up.gif",
    label: "Weighted Push-Up",
  },
  {
    id: "ring-dips",
    img: "calisthenics/Chest/Ring Dips.gif",
    label: "Ring Dips",
  },
  { id: "push-up", img: "calisthenics/Chest/Push-Up.gif", label: "Push-Up" },
  {
    id: "negative-push-up",
    img: "calisthenics/Chest/Negative Push-Up.gif",
    label: "Negative Push-Up",
  },
  {
    id: "weighted-chin-up-bicep",
    img: "calisthenics/Bicep/Weighted Chin Up.gif",
    label: "Weighted Chin Up",
  },
  {
    id: "chin-up-bicep",
    img: "calisthenics/Bicep/Chin-Up.gif",
    label: "Chin-Up",
  },
  {
    id: "knee-close-grip-push-up",
    img: "calisthenics/Tricep/Knee Close Grip Push-Up.gif",
    label: "Knee Close Grip Push-Up",
  },
  {
    id: "diamond-push-up",
    img: "calisthenics/Tricep/Diamond Push-Up.gif",
    label: "Diamond Push-Up",
  },
  {
    id: "weighted-dips",
    img: "calisthenics/Tricep/Weighted Dips.gif",
    label: "Weighted Dips",
  },
  {
    id: "incline-close-grip-push-up",
    img: "calisthenics/Tricep/Incline Close Grip Push-Up.gif",
    label: "Incline Close Grip Push-Up",
  },
  {
    id: "weighted-bench-dips",
    img: "calisthenics/Tricep/Weighted Bench Dips.gif",
    label: "Weighted Bench Dips",
  },
  {
    id: "reverse-hand-push-up",
    img: "calisthenics/Tricep/Reverse Hand Push-Up.gif",
    label: "Reverse Hand Push-Up",
  },
  {
    id: "full-planche-push-up",
    img: "calisthenics/Tricep/Full Planche Push-Up.gif",
    label: "Full Planche Push-Up",
  },
  {
    id: "pike-push-up-tricep",
    img: "calisthenics/Tricep/Pike Push-Up.gif",
    label: "Pike Push-Up",
  },
  {
    id: "decline-diamond-push-up",
    img: "calisthenics/Tricep/Decline Diamond Push-Up.gif",
    label: "Decline Diamond Push-Up",
  },
  {
    id: "pike-push-up-between-benches-tricep",
    img: "calisthenics/Tricep/Pike Push-Up Between Benches.gif",
    label: "Pike Push-Up Between Benches",
  },
  {
    id: "negative-pull-up",
    img: "calisthenics/Back/Negative Pull-Up.gif",
    label: "Negative Pull-Up",
  },
  { id: "flag", img: "calisthenics/Back/Flag.gif", label: "Flag" },
  {
    id: "weighted-chin-up-back",
    img: "calisthenics/Back/Weighted Chin Up.gif",
    label: "Weighted Chin Up",
  },
  {
    id: "suspension-inverted-row",
    img: "calisthenics/Back/Suspension Inverted Row.gif",
    label: "Suspension Inverted Row",
  },
  {
    id: "wide-grip-rear-pull-up",
    img: "calisthenics/Back/Wide Grip Rear Pull-Up.gif",
    label: "Wide Grip Rear Pull-Up",
  },
  {
    id: "pull-up-neutral-grip",
    img: "calisthenics/Back/Pull-Up Neutral Grip.gif",
    label: "Pull-Up Neutral Grip",
  },
  {
    id: "muscle-up",
    img: "calisthenics/Back/Muscle-up.gif",
    label: "Muscle-up",
  },
  {
    id: "close-grip-pull-up",
    img: "calisthenics/Back/Close Grip Pull Up.gif",
    label: "Close Grip Pull Up",
  },
  {
    id: "pull-up-wide-grip",
    img: "calisthenics/Back/Pull-Up Wide Grip.gif",
    label: "Pull-Up Wide Grip",
  },
  {
    id: "chin-up-back",
    img: "calisthenics/Back/Chin-Up.gif",
    label: "Chin-Up",
  },
  {
    id: "rings-pull-up",
    img: "calisthenics/Back/Rings Pull-Up.gif",
    label: "Rings Pull-Up",
  },
  {
    id: "ring-muscle-up",
    img: "calisthenics/Back/Ring Muscle Up.gif",
    label: "Ring Muscle Up",
  },
  {
    id: "front-lever",
    img: "calisthenics/Back/Front Lever.gif",
    label: "Front Lever",
  },
  { id: "pull-up", img: "calisthenics/Back/Pull-Up.gif", label: "Pull-Up" },
  {
    id: "weighted-pull-up",
    img: "calisthenics/Back/Weighted Pull-Up.gif",
    label: "Weighted Pull-Up",
  },
  {
    id: "full-plance",
    img: "calisthenics/Shoulder/Full Planche.gif",
    label: "Full Planche",
  },
];

const Calisthenics = () => {
  const [programs, setPrograms] = useState([]);
  const [programDiv, setProgramDiv] = useState(false);
  const [workoutId, setWorkoutId] = useState(null);

  const toggleProgramDiv = () => {
    setProgramDiv(!programDiv);
    console.log(workoutId);
  };

  const fetchPrograms = async () => {
    const response = await fetch("http://localhost:3000/programs");
    const data = await response.json();
    setPrograms(data);
  };

  fetchPrograms();

  const postExercise = async (id) => {
    const workout = calisthenicsWorkouts.find(
      (workout) => workout.id === workoutId
    );
    if (!workoutId) return;

    const response = await fetch(`http://localhost:3000/programs/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        workoutname: workout.id,
        workoutgif: workout.img,
      }),
    });
    if (!response.ok) {
      const error = await response.json();
      alert(error.error);
      toggleProgramDiv();
      return;
    }
    toggleProgramDiv();
  };
  return (
    <>
      <div className="calisthenicsContainer">
        {calisthenicsWorkouts.map((workout) => (
          <div key={workout.id} className="cards">
            <Link
              className="h3Decoration"
              to={`/workout/${workout.id}`}
            >
              <img src={workout.img} alt={workout.label} />
              <h3>{workout.label}</h3>
            </Link>
            <button
              onClick={() => {
                toggleProgramDiv();
                setWorkoutId(workout.id);
              }}
            >
              Add workout
            </button>
          </div>
        ))}
      </div>

      <div
        className="programDiv"
        style={{ display: programDiv ? "flex" : "none" }}
      >
        <div className="programDiv-content">
          <h2>Programs:</h2>
          {programs.map((program) => (
            <div className="programCards" key={program.id}>
              <h1>{program.programname}</h1>
              <button onClick={() => postExercise(program.id)}>Add Here</button>
            </div>
          ))}
          <button className="closeProgram" onClick={toggleProgramDiv}>
            Close Program
          </button>
          {/* Add your program creation logic here */}
        </div>
      </div>
    </>
  );
};

export default Calisthenics;
