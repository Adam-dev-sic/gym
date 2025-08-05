import React from "react";
import { Link } from "react-router-dom";
function Diet() {
  return (
    <div className="diet">
      <h1>Diet Page</h1>
      <p>
        Welcome to your personalized diet planner! Here, you can explore a wide
        variety of foods, each with detailed nutritional information such as
        calories, protein, carbs, and more.
        <br /> <br /> <br />
      </p>
      <p>
        Browse our food database to discover healthy options and learn more
        about what you eat. When you're ready, create your own custom food
        programs to organize your meals and reach your nutrition goals.
           <br /> <br /> <br />
      </p>
      <p>
        Whether you're tracking your macros, planning for weight loss, or just
        curious about your daily intake, our tools make it easy to build and
        manage your ideal diet.
           <br /> <br /> <br />
      </p>
      <Link to="foods">
        <button>View Foods</button>
      </Link>
    </div>
  );
}

export default Diet;
