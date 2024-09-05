import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "../ErrorPage";
import Task from "./Task";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tasks/:id",
    element: <Task />,
  },
]);

export default router;
