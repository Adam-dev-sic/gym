import React, { useEffect, useState } from "react";

const foods = {
  apple: {
    imgsource: "/foods/apple.jpg",
    quantity: "100g",
    calories: 52,
    protein: 0.3,
    carbs: 14,
    fat: 0.2,
    fiber: 2.4,
    sugar: 10.4,
    sodium: 1,
    cholesterol: 0,
    calcium: 6,
    iron: 0.1,
    potassium: 107,
  },
  almonds: {
    imgsource: "/foods/almonds.jpg",
    quantity: "100g",
    calories: 579,
    protein: 21.2,
    carbs: 21.6,
    fat: 49.9,
    fiber: 12.5,
    sugar: 4.4,
    sodium: 1,
    cholesterol: 0,
    calcium: 269,
    iron: 3.7,
    potassium: 733,
  },
  apricots: {
    imgsource: "/foods/apricots.jpg",
    quantity: "100g",
    calories: 48,
    protein: 1.4,
    carbs: 11.1,
    fat: 0.4,
    fiber: 2.0,
    sugar: 9.2,
    sodium: 1,
    cholesterol: 0,
    calcium: 13,
    iron: 0.4,
    potassium: 259,
  },
  avocado: {
    imgsource: "/foods/avocado.jpg",
    quantity: "100g",
    calories: 160,
    protein: 2.0,
    carbs: 8.5,
    fat: 14.7,
    fiber: 6.7,
    sugar: 0.7,
    sodium: 7,
    cholesterol: 0,
    calcium: 12,
    iron: 0.6,
    potassium: 485,
  },
  banana: {
    imgsource: "/foods/banana.jpg",
    quantity: "100g",
    calories: 89,
    protein: 1.1,
    carbs: 22.8,
    fat: 0.3,
    fiber: 2.6,
    sugar: 12.2,
    sodium: 1,
    cholesterol: 0,
    calcium: 5,
    iron: 0.3,
    potassium: 358,
  },
  beetroot: {
    imgsource: "/foods/beetroot.jpg",
    quantity: "100g",
    calories: 43,
    protein: 1.6,
    carbs: 9.6,
    fat: 0.2,
    fiber: 2.8,
    sugar: 6.8,
    sodium: 78,
    cholesterol: 0,
    calcium: 16,
    iron: 0.8,
    potassium: 325,
  },
  berry: {
    imgsource: "/foods/berry.jpg",
    quantity: "100g",
    calories: 57,
    protein: 0.7,
    carbs: 14.5,
    fat: 0.3,
    fiber: 2.4,
    sugar: 10,
    sodium: 1,
    cholesterol: 0,
    calcium: 16,
    iron: 0.4,
    potassium: 77,
  },
  Bread: {
    imgsource: "/foods/Bread.jpg",
    quantity: "100g",
    calories: 265,
    protein: 9,
    carbs: 49,
    fat: 3.2,
    fiber: 2.7,
    sugar: 5,
    sodium: 491,
    cholesterol: 0,
    calcium: 144,
    iron: 3.6,
    potassium: 115,
  },
  carrot: {
    imgsource: "/foods/carrot.jpg",
    quantity: "100g",
    calories: 41,
    protein: 0.9,
    carbs: 9.6,
    fat: 0.2,
    fiber: 2.8,
    sugar: 4.7,
    sodium: 69,
    cholesterol: 0,
    calcium: 33,
    iron: 0.3,
    potassium: 320,
  },
  "cheddar-cheese": {
    imgsource: "/foods/cheddar-cheese.jpg",
    quantity: "100g",
    calories: 403,
    protein: 24.9,
    carbs: 1.3,
    fat: 33.1,
    fiber: 0,
    sugar: 0.5,
    sodium: 621,
    cholesterol: 105,
    calcium: 721,
    iron: 0.7,
    potassium: 98,
  },
  cherries: {
    imgsource: "/foods/cherries.jpg",
    quantity: "100g",
    calories: 50,
    protein: 1,
    carbs: 12,
    fat: 0.3,
    fiber: 1.6,
    sugar: 8.5,
    sodium: 3,
    cholesterol: 0,
    calcium: 13,
    iron: 0.4,
    potassium: 173,
  },
  chicken: {
    imgsource: "/foods/chicken.jpg",
    quantity: "100g",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    fiber: 0,
    sugar: 0,
    sodium: 74,
    cholesterol: 85,
    calcium: 15,
    iron: 1,
    potassium: 256,
  },
  "chili-pepper": {
    imgsource: "/foods/chili-pepper.jpg",
    quantity: "100g",
    calories: 40,
    protein: 2,
    carbs: 9,
    fat: 0.4,
    fiber: 1.5,
    sugar: 5.3,
    sodium: 9,
    cholesterol: 0,
    calcium: 14,
    iron: 1,
    potassium: 322,
  },
  corn: {
    imgsource: "/foods/corn.jpg",
    quantity: "100g",
    calories: 86,
    protein: 3.2,
    carbs: 19,
    fat: 1.2,
    fiber: 2.7,
    sugar: 6.3,
    sodium: 15,
    cholesterol: 0,
    calcium: 2,
    iron: 0.5,
    potassium: 270,
  },
  cucumber: {
    imgsource: "/foods/cucumber.jpg",
    quantity: "100g",
    calories: 16,
    protein: 0.7,
    carbs: 3.6,
    fat: 0.1,
    fiber: 0.5,
    sugar: 1.7,
    sodium: 2,
    cholesterol: 0,
    calcium: 16,
    iron: 0.3,
    potassium: 147,
  },
  dates: {
    imgsource: "/foods/dates.jpg",
    quantity: "100g",
    calories: 282,
    protein: 2.5,
    carbs: 75,
    fat: 0.4,
    fiber: 8,
    sugar: 63,
    sodium: 2,
    cholesterol: 0,
    calcium: 39,
    iron: 1,
    potassium: 656,
  },
  eggplant: {
    imgsource: "/foods/eggplant.jpg",
    quantity: "100g",
    calories: 25,
    protein: 1,
    carbs: 6,
    fat: 0.2,
    fiber: 3,
    sugar: 3.2,
    sodium: 2,
    cholesterol: 0,
    calcium: 9,
    iron: 0.2,
    potassium: 229,
  },
  eggs: {
    imgsource: "/foods/eggs.jpg",
    quantity: "100g",
    calories: 143,
    protein: 13,
    carbs: 1.1,
    fat: 9.5,
    fiber: 0,
    sugar: 1.1,
    sodium: 142,
    cholesterol: 373,
    calcium: 56,
    iron: 1.8,
    potassium: 138,
  },
  fries: {
    imgsource: "/foods/fries.png",
    quantity: "100g",
    calories: 312,
    protein: 3.4,
    carbs: 41,
    fat: 15,
    fiber: 3.8,
    sugar: 0.3,
    sodium: 210,
    cholesterol: 0,
    calcium: 18,
    iron: 0.8,
    potassium: 579,
  },
  garlic: {
    imgsource: "/foods/garlic.jpg",
    quantity: "100g",
    calories: 149,
    protein: 6.4,
    carbs: 33,
    fat: 0.5,
    fiber: 2.1,
    sugar: 1,
    sodium: 17,
    cholesterol: 0,
    calcium: 181,
    iron: 1.7,
    potassium: 401,
  },
  ginger: {
    imgsource: "/foods/ginger.jpg",
    quantity: "100g",
    calories: 80,
    protein: 1.8,
    carbs: 18,
    fat: 0.8,
    fiber: 2,
    sugar: 1.7,
    sodium: 13,
    cholesterol: 0,
    calcium: 16,
    iron: 0.6,
    potassium: 415,
  },
  "gouda-cheese": {
    imgsource: "/foods/gouda-cheese.jpg",
    quantity: "100g",
    calories: 356,
    protein: 25,
    carbs: 2.2,
    fat: 27.4,
    fiber: 0,
    sugar: 2.2,
    sodium: 819,
    cholesterol: 114,
    calcium: 700,
    iron: 0.2,
    potassium: 121,
  },
  grape: {
    imgsource: "/foods/grape.jpg",
    quantity: "100g",
    calories: 69,
    protein: 0.7,
    carbs: 18,
    fat: 0.2,
    fiber: 0.9,
    sugar: 16,
    sodium: 2,
    cholesterol: 0,
    calcium: 10,
    iron: 0.4,
    potassium: 191,
  },
  "greek-yogurt": {
    imgsource: "/foods/greek-yogurt.png",
    quantity: "100g",
    calories: 59,
    protein: 10,
    carbs: 3.6,
    fat: 0.4,
    fiber: 0,
    sugar: 3.2,
    sodium: 36,
    cholesterol: 5,
    calcium: 110,
    iron: 0,
    potassium: 141,
  },
  gruyere: {
    imgsource: "/foods/gruyere.png",
    quantity: "100g",
    calories: 413,
    protein: 29.8,
    carbs: 0.4,
    fat: 32.3,
    fiber: 0,
    sugar: 0.4,
    sodium: 336,
    cholesterol: 93,
    calcium: 1011,
    iron: 0.2,
    potassium: 81,
  },
  "ham-meat": {
    imgsource: "/foods/ham-meat.jpg",
    quantity: "100g",
    calories: 145,
    protein: 20.9,
    carbs: 1.5,
    fat: 5.5,
    fiber: 0,
    sugar: 1.5,
    sodium: 1203,
    cholesterol: 53,
    calcium: 7,
    iron: 0.7,
    potassium: 340,
  },
  honey: {
    imgsource: "/foods/honey.jpg",
    quantity: "100g",
    calories: 304,
    protein: 0.3,
    carbs: 82.4,
    fat: 0,
    fiber: 0.2,
    sugar: 82.1,
    sodium: 4,
    cholesterol: 0,
    calcium: 6,
    iron: 0.4,
    potassium: 52,
  },
  kiwi: {
    imgsource: "/foods/kiwi.jpeg",
    quantity: "100g",
    calories: 61,
    protein: 1.1,
    carbs: 15,
    fat: 0.5,
    fiber: 3,
    sugar: 9,
    sodium: 3,
    cholesterol: 0,
    calcium: 34,
    iron: 0.3,
    potassium: 312,
  },
  lemon: {
    imgsource: "/foods/lemon.jpg",
    quantity: "100g",
    calories: 29,
    protein: 1.1,
    carbs: 9.3,
    fat: 0.3,
    fiber: 2.8,
    sugar: 2.5,
    sodium: 2,
    cholesterol: 0,
    calcium: 26,
    iron: 0.6,
    potassium: 138,
  },
  mango: {
    imgsource: "/foods/mango.jpeg",
    quantity: "100g",
    calories: 60,
    protein: 0.8,
    carbs: 15,
    fat: 0.4,
    fiber: 1.6,
    sugar: 13.7,
    sodium: 1,
    cholesterol: 0,
    calcium: 11,
    iron: 0.2,
    potassium: 168,
  },
  mayonnaise: {
    imgsource: "/foods/mayonnaise.jpg",
    quantity: "100g",
    calories: 680,
    protein: 1,
    carbs: 0.6,
    fat: 75,
    fiber: 0,
    sugar: 0.6,
    sodium: 635,
    cholesterol: 42,
    calcium: 8,
    iron: 0.2,
    potassium: 20,
  },
  melon: {
    imgsource: "/foods/melon.jpg",
    quantity: "100g",
    calories: 34,
    protein: 0.8,
    carbs: 8.2,
    fat: 0.2,
    fiber: 0.9,
    sugar: 7.9,
    sodium: 16,
    cholesterol: 0,
    calcium: 9,
    iron: 0.2,
    potassium: 267,
  },
  milk: {
    imgsource: "/foods/milk.jpg",
    quantity: "100g",
    calories: 42,
    protein: 3.4,
    carbs: 5,
    fat: 1,
    fiber: 0,
    sugar: 5,
    sodium: 44,
    cholesterol: 5,
    calcium: 125,
    iron: 0,
    potassium: 150,
  },
  olive: {
    imgsource: "/foods/olive.jpg",
    quantity: "100g",
    calories: 115,
    protein: 0.8,
    carbs: 6.3,
    fat: 10.7,
    fiber: 3.2,
    sugar: 0,
    sodium: 735,
    cholesterol: 0,
    calcium: 88,
    iron: 3.3,
    potassium: 8,
  },
  "olive-oil": {
    imgsource: "/foods/olive-oil.jpg",
    quantity: "100g",
    calories: 884,
    protein: 0,
    carbs: 0,
    fat: 100,
    fiber: 0,
    sugar: 0,
    sodium: 2,
    cholesterol: 0,
    calcium: 1,
    iron: 0.6,
    potassium: 1,
  },
  onion: {
    imgsource: "/foods/onion.jpg",
    quantity: "100g",
    calories: 40,
    protein: 1.1,
    carbs: 9.3,
    fat: 0.1,
    fiber: 1.7,
    sugar: 4.2,
    sodium: 4,
    cholesterol: 0,
    calcium: 23,
    iron: 0.2,
    potassium: 146,
  },
  orange: {
    imgsource: "/foods/orange.png",
    quantity: "100g",
    calories: 47,
    protein: 0.9,
    carbs: 12,
    fat: 0.1,
    fiber: 2.4,
    sugar: 9,
    sodium: 0,
    cholesterol: 0,
    calcium: 40,
    iron: 0.1,
    potassium: 181,
  },
  oysters: {
    imgsource: "/foods/oysters.jpg",
    quantity: "100g",
    calories: 68,
    protein: 7,
    carbs: 4.9,
    fat: 2.5,
    fiber: 0,
    sugar: 0,
    sodium: 90,
    cholesterol: 42,
    calcium: 59,
    iron: 6.7,
    potassium: 156,
  },
  peach: {
    imgsource: "/foods/peach.jpg",
    quantity: "100g",
    calories: 39,
    protein: 0.9,
    carbs: 10,
    fat: 0.3,
    fiber: 1.5,
    sugar: 8.4,
    sodium: 0,
    cholesterol: 0,
    calcium: 6,
    iron: 0.3,
    potassium: 190,
  },
  "peanut-butter": {
    imgsource: "/foods/peanut-butter.jpg",
    quantity: "100g",
    calories: 588,
    protein: 25,
    carbs: 20,
    fat: 50,
    fiber: 6,
    sugar: 9,
    sodium: 17,
    cholesterol: 0,
    calcium: 43,
    iron: 1.9,
    potassium: 649,
  },
  pear: {
    imgsource: "/foods/pear.png",
    quantity: "100g",
    calories: 57,
    protein: 0.4,
    carbs: 15,
    fat: 0.1,
    fiber: 3.1,
    sugar: 10,
    sodium: 1,
    cholesterol: 0,
    calcium: 9,
    iron: 0.2,
    potassium: 116,
  },
  pepper: {
    imgsource: "/foods/pepper.jpg",
    quantity: "100g",
    calories: 20,
    protein: 0.9,
    carbs: 4.6,
    fat: 0.2,
    fiber: 1.7,
    sugar: 2.4,
    sodium: 3,
    cholesterol: 0,
    calcium: 10,
    iron: 0.3,
    potassium: 175,
  },
  pomgrante: {
    imgsource: "/foods/pomgrante.jpg",
    quantity: "100g",
    calories: 83,
    protein: 1.7,
    carbs: 19,
    fat: 1.2,
    fiber: 4,
    sugar: 14,
    sodium: 3,
    cholesterol: 0,
    calcium: 10,
    iron: 0.3,
    potassium: 236,
  },
  potatoes: {
    imgsource: "/foods/potatoes.jpg",
    quantity: "100g",
    calories: 77,
    protein: 2,
    carbs: 17,
    fat: 0.1,
    fiber: 2.2,
    sugar: 0.8,
    sodium: 6,
    cholesterol: 0,
    calcium: 12,
    iron: 0.8,
    potassium: 429,
  },
  rice: {
    imgsource: "/foods/rice.jpg",
    quantity: "100g",
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fat: 0.3,
    fiber: 0.4,
    sugar: 0.1,
    sodium: 1,
    cholesterol: 0,
    calcium: 10,
    iron: 1.2,
    potassium: 35,
  },
  salmon: {
    imgsource: "/foods/salmon.jpg",
    quantity: "100g",
    calories: 208,
    protein: 20,
    carbs: 0,
    fat: 13,
    fiber: 0,
    sugar: 0,
    sodium: 59,
    cholesterol: 55,
    calcium: 9,
    iron: 0.5,
    potassium: 363,
  },
  shrimp: {
    imgsource: "/foods/shrimp.jpg",
    quantity: "100g",
    calories: 99,
    protein: 24,
    carbs: 0.2,
    fat: 0.3,
    fiber: 0,
    sugar: 0,
    sodium: 111,
    cholesterol: 189,
    calcium: 70,
    iron: 0.5,
    potassium: 259,
  },
  spaghetti: {
    imgsource: "/foods/spaghetti.jpeg",
    quantity: "100g",
    calories: 158,
    protein: 5.8,
    carbs: 30.9,
    fat: 0.9,
    fiber: 1.8,
    sugar: 0.6,
    sodium: 1,
    cholesterol: 0,
    calcium: 7,
    iron: 0.4,
    potassium: 44,
  },
  steak: {
    imgsource: "/foods/steak.jpg",
    quantity: "100g",
    calories: 271,
    protein: 25,
    carbs: 0,
    fat: 19,
    fiber: 0,
    sugar: 0,
    sodium: 55,
    cholesterol: 90,
    calcium: 18,
    iron: 2.6,
    potassium: 370,
  },
  tomato: {
    imgsource: "/foods/tomato.png",
    quantity: "100g",
    calories: 18,
    protein: 0.9,
    carbs: 3.9,
    fat: 0.2,
    fiber: 1.2,
    sugar: 2.6,
    sodium: 5,
    cholesterol: 0,
    calcium: 10,
    iron: 0.3,
    potassium: 237,
  },
  "tuna-can": {
    imgsource: "/foods/tuna-can.jpeg",
    quantity: "100g",
    calories: 132,
    protein: 28,
    carbs: 0,
    fat: 1,
    fiber: 0,
    sugar: 0,
    sodium: 247,
    cholesterol: 38,
    calcium: 8,
    iron: 1.3,
    potassium: 252,
  },
  watermelon: {
    imgsource: "/foods/watermelon.jpg",
    quantity: "100g",
    calories: 30,
    protein: 0.6,
    carbs: 8,
    fat: 0.2,
    fiber: 0.4,
    sugar: 6,
    sodium: 1,
    cholesterol: 0,
    calcium: 7,
    iron: 0.2,
    potassium: 112,
  },
};

function Foods() {
  const [foodInfos, setFoodInfos] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [foodProgramDiv, setFoodProgramDiv] = useState(false);
  const [foodProgram, setFoodProgram] = useState(null);
  const [foodName, setFoodName] = useState(null);

  const toggleFoodProgramDiv = () => {
    setFoodProgramDiv(!foodProgramDiv);
  };

  const fetchFoodPrograms = async () => {
    const response = await fetch("http://localhost:3000/foodprograms");
    if (response.ok) {
      const data = await response.json();
      setFoodProgram(data);
    } else {
      console.error("Failed to fetch food programs");
    }
  };

  useEffect(() => {
    fetchFoodPrograms();
  }, []);

  const postFood = async (id) => {
    const foodArray = Object.entries(foods)
      .filter(([name]) => name === foodName)
      .map(([name, details]) => ({ name, ...details }));
    const food = foodArray[0];
    const response = await fetch(`http://localhost:3000/foodprograms/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        foodname: food.name,
        foodpic: food.imgsource,
        foodquantity: food.quantity,
        foodcalories: food.calories,
        foodprotein: food.protein,
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.error === "Food already in program") {
        alert("This food is already in the program!");
      } else {
        alert("Failed to add food: " + (errorData.error || "Unknown error"));
      }
      return;
    }

    toggleFoodProgramDiv();
  };

  const handleClick = (food) => {
    setFoodInfos(food);
    setShowMore(true);
  };
  const closeButton = () => {
    setShowMore(false);
    setFoodInfos(null);
  };
  return (
    <>
      <div className="foodContainer">
        {Object.entries(foods).map(([name, food], index) => (
          <div className="foodCard" key={index}>
            <img src={food.imgsource} alt={name} className="foodImage" />
            <h3 className="foodName">{name}</h3>
            <div className="minorDetails">
              <div className="circleDetail">
                <p className="foodQuantity">Quantity: {food.quantity}</p>
              </div>
              <div className="circleDetail">
                <p className="foodCalories">Calories: {food.calories} cal</p>
              </div>
              <div className="circleDetail">
                <p className="foodProtein">
                  Protein: <br></br>
                  {food.protein}g
                </p>
              </div>
            </div>
            <button onClick={() => handleClick(food)}>Show Details</button>
            <button
              onClick={() => {
                setFoodName(name);
                toggleFoodProgramDiv();
              }}
              className="add"
            >
              Add
            </button>
          </div>
        ))}
      </div>

      <div
        className="programDiv"
        style={{ display: foodProgramDiv ? "flex" : "none" }}
      >
        <div className="programDiv-content">
          <h2>Food Programs:</h2>
          {foodProgram &&
            foodProgram.map((program) => (
              <div className="programCards" key={program.id}>
                <h2>{program.foodprogramname}</h2>
                <button onClick={() => postFood(program.id)}>add here</button>
              </div>
            ))}
          <button className="closeProgram" onClick={toggleFoodProgramDiv}>
            Close
          </button>
          {/* Add your food program creation logic here */}
        </div>
      </div>

      {showMore && foodInfos && (
        <div className="foodDetailsContainer">
          <div className="foodDetails">
            <img
              src={foodInfos.imgsource}
              alt={foodInfos.name}
              className="foodImage"
            />
            <p>Quantity: {foodInfos.quantity}</p>
            <p>Calories: {foodInfos.calories}cal</p>
            <p>Protein: {foodInfos.protein}g</p>
            <p>Carbs: {foodInfos.carbs}g</p>
            <p>Fat: {foodInfos.fat}g</p>
            <p>Fiber: {foodInfos.fiber}g</p>
            <p>Sugar: {foodInfos.sugar}g</p>
            <p>Sodium: {foodInfos.sodium}mg</p>
            <p>Cholesterol: {foodInfos.cholesterol}mg</p>
            <p>Calcium: {foodInfos.calcium}mg</p>
            <p>Iron: {foodInfos.iron}mg</p>
            <p>Potassium: {foodInfos.potassium}mg</p>
            <button onClick={closeButton}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
export default Foods;

// const [foodInfos, setFoodInfos] = useState(false);
//   handleClick = (food) => {
//     setFoodInfos(foods[food]);
//   };
