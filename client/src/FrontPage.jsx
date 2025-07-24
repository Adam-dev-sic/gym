import { Link } from "react-router-dom";
function FrontPage() {
  return (
    <>
      <div id="container">
        <Link className="h1Links" to="/gym">
          {" "}
          <h1 className="h1Links">Gym excercises</h1>
        </Link>
        <div className="gym">
          <div className="gymCards">
            <img src="gymWorkouts/Chest/Barbell Bench Press.gif" alt="" />
          </div>
          <div className="gymCards">
            <img src="gymWorkouts/Chest/Dumbbell Chest Fly.gif" alt="" />
          </div>
          <div className="gymCards">
            {" "}
            <img src="gymWorkouts/Chest/Decline Dumbbell Fly.gif" alt="" />
          </div>
          <div className="gymCards">
            <img
              src="gymWorkouts/Tricep/EZ-Bar Seated Triceps Extension.gif"
              alt=""
            />
          </div>
          <div className="gymCards">
            <img
              src="gymWorkouts/Tricep/Lying EZ-Bar Triceps Extension.gif"
              alt=""
            />
          </div>
          <div className="gymCards">
            <img src="gymWorkouts/Tricep/Machine Triceps Pushdown.gif" alt="" />
          </div>
          <div className="gymCards">
            <img
              src="gymWorkouts/Tricep/Machine Triceps Extension.gif"
              alt=""
            />
          </div>
          <div className="gymCards">
            <img src="gymWorkouts/Shoulder/Cable Face Pull.gif" alt="" />
          </div>
          <div className="gymCards">
            <img src="gymWorkouts/Shoulder/Cable Front Raise.gif" alt="" />
          </div>
          <div className="gymCards">
            <img src="gymWorkouts/Shoulder/Machine Reverse Flyes.gif" alt="" />
          </div>
        </div>
        <Link className="h1Links" to="/calisthenics">
          <h1  className="h1Links">Calisthenics excercises</h1>
        </Link>
        <div className="calisthenics">
          <div className="calisthenicsCard">
            <h4></h4> <img src="calisthenics/Chest/Archer Push-Up.gif" alt="" />
          </div>
          <div className="calisthenicsCard">
            <h4></h4> <img src="calisthenics/Chest/Clap Push-Up.gif" alt="" />
          </div>
          <div className="calisthenicsCard">
            <h4></h4> <img src="calisthenics/Chest/Push-Up.gif" alt="" />
          </div>
          <div className="calisthenicsCard">
            <h4></h4>{" "}
            <img src="calisthenics/Tricep/Decline Diamond Push-Up.gif" alt="" />
          </div>
          <div className="calisthenicsCard">
            <h4></h4>{" "}
            <img src="calisthenics/Tricep/Diamond Push-Up.gif" alt="" />
          </div>
          <div className="calisthenicsCard">
            <h4></h4>{" "}
            <img
              src="calisthenics/Tricep/Incline Close Grip Push-Up.gif"
              alt=""
            />
          </div>
          <div className="calisthenicsCard">
         
            <img src="calisthenics/Tricep/Weighted Bench Dips.gif" alt="" />
          </div>
          <div className="calisthenicsCard">
            <h4></h4> <img src="calisthenics/Shoulder/Arm Circles.gif" alt="" />
          </div>
          <div className="calisthenicsCard">
            <h4></h4>{" "}
            <img src="calisthenics/Shoulder/Handstand Hold.gif" alt="" />
          </div>
          <div className="calisthenicsCard">
            <h4></h4>{" "}
            <img src="calisthenics/Shoulder/Handstand Push-Up.gif" alt="" />
          </div>
     
        </div>
      </div>
    </>
  );
}

export default FrontPage;
