import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Foodprogram() {
  const [foodPrograms, setFoodPrograms] = useState([]);
  const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const foodProgramName = formData.get("foodProgramName");

    await fetch("http://localhost:3000/foodprograms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ foodprogramname: foodProgramName }),
    });
    setForm(false);
    e.target.reset();
  };
  const fetchFoodPrograms = async () => {
    const response = await fetch("http://localhost:3000/foodprograms");
    const data = await response.json();
    setFoodPrograms(data);
  };
  useEffect(() => {
    fetchFoodPrograms();
  }, [foodPrograms]);

  let calories = 0;

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/foodprograms`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    fetchFoodPrograms();
  };

  const deleteFood = async (name) => {
    await fetch(`http://localhost:3000/foodprograms/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ foodname: name }),
    });
    currentFoodProgram(id);
  };

  const { id } = useParams();
  const [foodProgramCards, setFoodProgramCards] = useState(null);
  const currentFoodProgram = async (id) => {
    const response = await fetch(`http://localhost:3000/foodprograms/${id}`);
    if (!response.ok) {
      console.error("Failed to fetch food program");
      return;
    }
    const data = await response.json();
    setFoodProgramCards(data);
  };
  useEffect(() => {
    if (id) {
      currentFoodProgram(id);
    }
  }, [id]);
  return (
    <>
      {!id && (
        <div className="foodprogram">
          <h2>Food Program</h2>
          <div className="food-programs">
            {foodPrograms.map((program) => (
              <div key={program.id} className="food-program-card">
                <Link to={`${program.id}`}>
                  <h1>{program.foodprogramname}</h1>
                </Link>
                <button onClick={() => handleDelete(program.id)}>
                  Delete Program
                </button>
              </div>
            ))}
          </div>
          <div>
            <button
              className="foodProgramButton"
              onClick={() => setForm(!form)}
            >
              Create Food Program
            </button>
            {form && (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="foodProgramName"
                  placeholder="Food Program Name"
                  required
                />
                <button type="submit">Create</button>
              </form>
            )}
          </div>
        </div>
      )}
      {id && foodProgramCards && (
        <>
          {foodProgramCards.foodcalories.forEach((calorie) => {
            calories += calorie;
          })}
          <div className="foodProgramDetails">
            <h1>{foodProgramCards.foodprogramname}</h1>
            <p>Total Calories: {calories} cal</p>
          </div>
          <div className="foodContainer">
            {foodProgramCards.foodname.map((name, index) => (
              <div className="foodCard" key={index}>
                <img
                  src={`${foodProgramCards.foodpic[index]}`}
                  alt={name}
                  className="foodImage"
                />

                <h3 className="foodName">{name}</h3>
                <div className="minorDetails">
                  <div className="circleDetail">
                    <p className="foodQuantity">
                      Quantity: {foodProgramCards.foodquantity[index]}
                    </p>
                  </div>
                  <div className="circleDetail">
                    <p className="foodCalories">
                      Calories: {foodProgramCards.foodcalories[index]} cal
                    </p>
                  </div>
                  <div className="circleDetail">
                    <p className="foodProtein">
                      Protein: <br></br>
                      {foodProgramCards.foodprotein[index]}g
                    </p>
                  </div>
                </div>
                <button onClick={() => deleteFood(name)}>Remove Food</button>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Foodprogram;
