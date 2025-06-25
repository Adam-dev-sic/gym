import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <button>Home</button>
        <button>Gym</button>
        <button>Calisthenics</button>
        <button>Make your program</button>
        <div className="profile"></div>
      </header>

      <footer>
        <button>
          <h1>make your program</h1>
        </button>
      </footer>
    </>
  );
}

export default App;
