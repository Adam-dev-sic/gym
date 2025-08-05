import { use, useState } from "react";
import "./App.css";
import { Link, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isDietPage = location.pathname.includes("diet");
  return (
    <>
      {!isDietPage ? (
        <header>
          <Link to={"/diet"}>
            <img
              className="svgImg"
              src="/arrows-reload-01-svgrepo-com.svg"
              alt=""
            />
          </Link>

          <div className="nav-buttons">
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="gym">
              <button>Gym</button>
            </Link>
            <Link to="calisthenics">
              <button>Calisthenics</button>
            </Link>
            <Link to="program">
              <button>Programs</button>
            </Link>
          </div>
          <div className="profile"></div>
        </header>
      ) : (
        <>
          <header>
            <Link to={"/"}>
              <img
                className="svgImg"
                src="/arrows-reload-01-svgrepo-com.svg"
                alt=""
              />
            </Link>

            <div className="nav-buttons">
              <Link to="/diet">
                <button>Home</button>
              </Link>
              <Link to="/diet/foods">
                <button>Foods</button>
              </Link>
              <Link to="/diet">
                <button>(coming soon)</button>
              </Link>
              <Link to="/diet/foodProgram">
                <button>Food Program</button>
              </Link>
            </div>
            <div className="profile"></div>
          </header>{" "}
        </>
      )}
      <main>
        <Outlet />
      </main>

      {!isDietPage ? (
        <>
          <footer>
            <Link to="program">
              <button>Make your program</button>
            </Link>
          </footer>{" "}
        </>
      ) : (
        <>
          <footer>
            <Link to="/diet/foodProgram">
              <button>Make your food program</button>
            </Link>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
