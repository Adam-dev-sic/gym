import { createBrowserRouter } from "react-router-dom";
import FrontPage from "./FrontPage.jsx";
import Gym from "./Gym.jsx";
import Workout from "./Workout.jsx";
import App from "./App.jsx";
import Calisthenics from "./Calisthenics.jsx";
import Program from "./Program.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <FrontPage /> },
      { path: "gym", element: <Gym /> },
      { path: "calisthenics", element: <Calisthenics /> },
      { path: "workout/:id", element: <Workout /> },
      // { path: "calisthenics/workout/:id", element: <Workout /> },
      { path: "program", element: <Program /> },
      { path: "program/:id", element: <Program /> },
    ],
  },
]);

export default router;
