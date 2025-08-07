import React, { use, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Program() {
  const [showForm, setForm] = useState(false);
  const [programs, setPrograms] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const programName = formData.get("programName");

    await fetch("http://localhost:3000/programs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ programname: programName }),
    });
    setForm(false);
    e.target.reset();
  };

  const fetchPrograms = async () => {
    const response = await fetch("http://localhost:3000/programs");
    const data = await response.json();
    setPrograms(data);
  };
  useEffect(() => {
    fetchPrograms();
  }, [programs]);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/programs`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    fetchPrograms();
  };

  const deleteWorkout = async (workoutname, workoutgif) => {
    await fetch(`http://localhost:3000/programs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ workoutname, workoutgif }),
    });
    currentProgram(id);
  };

  const { id } = useParams();

  const [programCards, setProgramCards] = useState(null);
  const currentProgram = async (id) => {
    const response = await fetch(`http://localhost:3000/programs/${id}`);
    if (!response.ok) {
      return <div>Error loading program details.</div>;
    }
    const programData = await response.json();
    setProgramCards(programData);
  };
  useEffect(() => {
    if (id) { 
      currentProgram(id);
    }
  }, [id]);
  return (
    <>
      {!id && (
        <div className="programMaking">
          <h2>Programs</h2>
          <div className="programs">
            {programs.map((program) => (
              <div className="programCard" key={program.id}>
                <Link to={`${program.id}`}>
                  <h1>{program.programname}</h1>
                </Link>
                <button onClick={() => handleDelete(program.id)}>
                  Delete Program
                </button>
              </div>
            ))}
          </div>
          <div className="">
            <button className="programButton" onClick={() => setForm(true)}>
              Add program
            </button>
            {showForm && (
              <form onSubmit={handleSubmit}>
                <label>
                  Program Name:
                  <input type="text" name="programName" />
                </label>
                <button type="submit">Create Program</button>
              </form>
            )}
          </div>
        </div>
      )}

      {id && (
        <div>
          {!programCards ? (
            <div>Loading program details...</div>
          ) : (
            <>
              <div className="programWorkouts">
                <Link to={"/program"}>
                  <button className="backButton">Go back</button>
                </Link>
                <div className="gymContainer">
                  {programCards.workoutname.map((workout, index) => (
                    <div key={index} className="cards">
                      <Link to={`/workout/${workout}`}>
                        <img
                          src={`/${programCards.workoutgif[index]}`}
                          alt={workout}
                        />
                        <h3>{workout}</h3>
                      </Link>
                      <button
                        onClick={() =>
                          deleteWorkout(workout, programCards.workoutgif[index])
                        }
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Program;
