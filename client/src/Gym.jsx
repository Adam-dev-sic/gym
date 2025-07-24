import { Link } from "react-router-dom";
import { useState } from "react";

const workouts = [
  {
    id: "barbell-bench-press",
    img: "gymWorkouts/Chest/Barbell Bench Press.gif",
    label: "Barbell Bench Press",
  },
  {
    id: "dumbbell-chest-fly",
    img: "gymWorkouts/Chest/Dumbbell Chest Fly.gif",
    label: "Dumbbell Chest Fly",
  },
  {
    id: "decline-dumbbell-fly",
    img: "gymWorkouts/Chest/Decline Dumbbell Fly.gif",
    label: "Decline Dumbbell Fly",
  },
  {
    id: "hammer-grip-dumbbell-bench-press",
    img: "gymWorkouts/Chest/Hammer Grip Dumbbell Bench Press.gif",
    label: "Hammer Grip Dumbbell Bench Press",
  },
  {
    id: "incline-barbell-bench-press",
    img: "gymWorkouts/Chest/Incline Barbell Bench Press.gif",
    label: "Incline Barbell Bench Press",
  },
  {
    id: "pec-deck-chest-fly",
    img: "gymWorkouts/Chest/Pec Deck Chest Fly.gif",
    label: "Pec Deck Chest Fly",
  },
  {
    id: "seated-cable-fly",
    img: "gymWorkouts/Chest/Seated Cable Fly.gif",
    label: "Seated Cable Fly",
  },

  {
    id: "cable-face-pull",
    img: "gymWorkouts/Shoulder/Cable Face Pull.gif",
    label: "Cable Face Pull",
  },
  {
    id: "cable-front-raise",
    img: "gymWorkouts/Shoulder/Cable Front Raise.gif",
    label: "Cable Front Raise",
  },
  {
    id: "cable-supinated-face-pull",
    img: "gymWorkouts/Shoulder/Cable Supinated Face Pull.gif",
    label: "Cable Supinated Face Pull",
  },
  {
    id: "dumbbell-front-raise",
    img: "gymWorkouts/Shoulder/Dumbbell Front Raise.gif",
    label: "Dumbbell Front Raise",
  },
  {
    id: "lateral-to-front-raise",
    img: "gymWorkouts/Shoulder/Lateral to Front Raise.gif",
    label: "Lateral to Front Raise",
  },
  {
    id: "machine-reverse-flyes",
    img: "gymWorkouts/Shoulder/Machine Reverse Flyes.gif",
    label: "Machine Reverse Flyes",
  },
  {
    id: "one-arm-cable-lateral-raise",
    img: "gymWorkouts/Shoulder/One-Arm Cable Lateral Raise.gif",
    label: "One-Arm Cable Lateral Raise",
  },
  {
    id: "seated-dumbbell-shoulder-press",
    img: "gymWorkouts/Shoulder/Seated Dumbbell Shoulder Press.gif",
    label: "Seated Dumbbell Shoulder Press",
  },

  {
    id: "cable-overhead-triceps-extension",
    img: "gymWorkouts/Tricep/Cable Overhead Triceps Extension.gif",
    label: "Cable Overhead Triceps Extension",
  },
  {
    id: "close-grip-smith-bench-press",
    img: "gymWorkouts/Tricep/Close Grip Smith Bench Press.gif",
    label: "Close Grip Smith Bench Press",
  },
  {
    id: "dumbbell-seated-triceps-extension",
    img: "gymWorkouts/Tricep/Dumbbell Seated Triceps Extension.gif",
    label: "Dumbbell Seated Triceps Extension",
  },
  {
    id: "ez-bar-seated-triceps-extension",
    img: "gymWorkouts/Tricep/EZ-Bar Seated Triceps Extension.gif",
    label: "EZ-Bar Seated Triceps Extension",
  },
  {
    id: "high-pulley-overhead-triceps-extension",
    img: "gymWorkouts/Tricep/High Pulley Overhead Triceps Extension.gif",
    label: "High Pulley Overhead Triceps Extension",
  },
  {
    id: "lying-ez-bar-triceps-extension",
    img: "gymWorkouts/Tricep/Lying EZ-Bar Triceps Extension.gif",
    label: "Lying EZ-Bar Triceps Extension",
  },
  {
    id: "machine-triceps-extension",
    img: "gymWorkouts/Tricep/Machine Triceps Extension.gif",
    label: "Machine Triceps Extension",
  },
  {
    id: "machine-triceps-pushdown",
    img: "gymWorkouts/Tricep/Machine Triceps Pushdown.gif",
    label: "Machine Triceps Pushdown",
  },
  {
    id: "one-arm-overhead-triceps-extension",
    img: "gymWorkouts/Tricep/One-Arm Overhead Triceps Extension.gif",
    label: "One-Arm Overhead Triceps Extension",
  },
  {
    id: "triceps-cable-pushdown-reverse-grip",
    img: "gymWorkouts/Tricep/Triceps Cable Pushdown Reverse Grip.gif",
    label: "Triceps Cable Pushdown Reverse Grip",
  },

  {
    id: "cable-preacher-curl",
    img: "gymWorkouts/Bicep/Cable Preacher Curl.gif",
    label: "Cable Preacher Curl",
  },
  {
    id: "double-dumbbell-preacher-curl",
    img: "gymWorkouts/Bicep/Double Dumbbell Preacher Curl.gif",
    label: "Double Dumbbell Preacher Curl",
  },
  {
    id: "dumbbell-hammer-curl",
    img: "gymWorkouts/Bicep/Dumbbell Hammer Curl.gif",
    label: "Dumbbell Hammer Curl",
  },
  {
    id: "dumbbell-spider-curl",
    img: "gymWorkouts/Bicep/Dumbbell Spider Curl.gif",
    label: "Dumbbell Spider Curl",
  },
  {
    id: "dumbbell-supinated-preacher-curl",
    img: "gymWorkouts/Bicep/Dumbbell Supinated Preacher Curl.gif",
    label: "Dumbbell Supinated Preacher Curl",
  },
  {
    id: "machine-preacher-curl",
    img: "gymWorkouts/Bicep/Machine Preacher Curl.gif",
    label: "Machine Preacher Curl",
  },
  {
    id: "one-arm-machine-preacher-curl",
    img: "gymWorkouts/Bicep/One-Arm Machine Preacher Curl.gif",
    label: "One-Arm Machine Preacher Curl",
  },
  {
    id: "preacher-hammer-curl",
    img: "gymWorkouts/Bicep/Preacher Hammer Curl.gif",
    label: "Preacher Hammer Curl",
  },
  {
    id: "rope-cable-hammer-curl",
    img: "gymWorkouts/Bicep/Rope Cable Hammer Curl.gif",
    label: "Rope Cable Hammer Curl",
  },
  {
    id: "zottman-curl",
    img: "gymWorkouts/Bicep/Zottman Curl.gif",
    label: "Zottman Curl",
  },

  {
    id: "band-bent-over-lat-pulldown",
    img: "gymWorkouts/Back/Band Bent Over Lat Pulldown.gif",
    label: "Band Bent Over Lat Pulldown",
  },
  {
    id: "barbell-bent-over-row-from-pin",
    img: "gymWorkouts/Back/Barbell Bent Over Row From Pin.gif",
    label: "Barbell Bent Over Row From Pin",
  },
  {
    id: "barbell-bent-over-row",
    img: "gymWorkouts/Back/Barbell Bent Over Row.gif",
    label: "Barbell Bent Over Row",
  },
  {
    id: "barbell-rear-delt-row",
    img: "gymWorkouts/Back/Barbell Rear Delt Row.gif",
    label: "Barbell Rear Delt Row",
  },
  {
    id: "cable-neutral-grip-lat-pulldown",
    img: "gymWorkouts/Back/Cable Neutral Grip Lat Pulldown.gif",
    label: "Cable Neutral Grip Lat Pulldown",
  },
  {
    id: "cable-seated-row-neutral-grip",
    img: "gymWorkouts/Back/Cable Seated Row Neutral Grip.gif",
    label: "Cable Seated Row Neutral Grip",
  },
  {
    id: "cable-wide-grip-behind-neck-pulldown",
    img: "gymWorkouts/Back/Cable Wide Grip Behind Neck Pulldown.gif",
    label: "Cable Wide Grip Behind Neck Pulldown",
  },
  {
    id: "chest-supported-machine-row",
    img: "gymWorkouts/Back/Chest Supported Machine Row.gif",
    label: "Chest Supported Machine Row",
  },
  {
    id: "double-dumbbell-bent-over-row",
    img: "gymWorkouts/Back/Double Dumbbell Bent Over Row.gif",
    label: "Double Dumbbell Bent Over Row",
  },
  {
    id: "dumbbell-bent-over-row",
    img: "gymWorkouts/Back/Dumbbell Bent Over Row.gif",
    label: "Dumbbell Bent Over Row",
  },
  {
    id: "dumbbell-kelso-shrugs",
    img: "gymWorkouts/Back/Dumbbell Kelso Shrugs.gif",
    label: "Dumbbell Kelso Shrugs",
  },
  {
    id: "incline-bench-dumbbell-wide-row",
    img: "gymWorkouts/Back/Incline Bench Dumbbell Wide Row.gif",
    label: "Incline Bench Dumbbell Wide Row",
  },
  {
    id: "one-arm-cable-half-kneeling-lat-pulldown",
    img: "gymWorkouts/Back/One-Arm Cable Half-Kneeling Lat Pulldown.gif",
    label: "One-Arm Cable Half-Kneeling Lat Pulldown",
  },
  {
    id: "one-arm-chest-supported-row-machine",
    img: "gymWorkouts/Back/One-Arm Chest Supported Row Machine.gif",
    label: "One-Arm Chest Supported Row Machine",
  },
  {
    id: "one-arm-dumbbell-bent-over-scapula-row",
    img: "gymWorkouts/Back/One-Arm Dumbbell Bent Over Scapula Row.gif",
    label: "One-Arm Dumbbell Bent Over Scapula Row",
  },
  {
    id: "one-arm-low-cable-seated-row",
    img: "gymWorkouts/Back/One-Arm Low Cable Seated Row.gif",
    label: "One-Arm Low Cable Seated Row",
  },
  {
    id: "rope-straight-arm-lat-pulldown",
    img: "gymWorkouts/Back/Rope Straight-Arm Lat Pulldown.gif",
    label: "Rope Straight-Arm Lat Pulldown",
  },
  {
    id: "rowing-machine",
    img: "gymWorkouts/Back/Rowing Machine.gif",
    label: "Rowing Machine",
  },
  {
    id: "seated-cable-row",
    img: "gymWorkouts/Back/Seated Cable Row.gif",
    label: "Seated Cable Row",
  },
  {
    id: "seated-cable-wide-grip-row",
    img: "gymWorkouts/Back/Seated Cable Wide Grip Row.gif",
    label: "Seated Cable Wide Grip Row",
  },
  {
    id: "smith-bent-over-row",
    img: "gymWorkouts/Back/Smith Bent Over Row.gif",
    label: "Smith Bent Over Row",
  },
  {
    id: "t-bar-chest-supported-row",
    img: "gymWorkouts/Back/T-Bar Chest Suported Row.gif",
    label: "T-Bar Chest Supported Row",
  },
  {
    id: "wide-grip-chest-supported-row",
    img: "gymWorkouts/Back/Wide Grip Chest Supported Row.gif",
    label: "Wide Grip Chest Supported Row",
  },
  {
    id: "wide-grip-lat-pulldown",
    img: "gymWorkouts/Back/Wide Grip Lat Pulldown.gif",
    label: "Wide Grip Lat Pulldown",
  },
];

function Gym() {
  const [programs, setPrograms] = useState([]);
  const [programDiv, setProgramDiv] = useState(false);
  const [workoutId, setWorkoutId] = useState(null);

  const toggleProgramDiv = () => {
    setProgramDiv(!programDiv);
    // Optionally: console.log(workoutId);
  };

  const fetchPrograms = async () => {
    const response = await fetch("http://localhost:3000/programs");
    const data = await response.json();
    setPrograms(data);
  };

  // Fetch programs every render is not ideal; useEffect is better:
  // This will fetch programs only once when the component mounts

  fetchPrograms();

  const postExercise = async (id) => {
    const workout = workouts.find((workout) => workout.id === workoutId);
    if (!workoutId || !workout) return;

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
      <div className="gymContainer">
        {workouts.map((workout) => (
          <div className="cards" key={workout.id}>
            <Link className="h3Decoration" to={`/workout/${workout.id}`}>
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
        </div>
      </div>
    </>
  );
}

export default Gym;
