import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>
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
          <button>Make your program</button>
        </Link>
        <div className="profile"></div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Link to="program">
        <button>Make your program</button></Link>
      </footer>
    </>
  );
}

export default App;
