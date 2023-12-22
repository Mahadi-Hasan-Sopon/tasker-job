import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import MainLayout from "../layouts/MainLayout";
import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Pricing from "../pages/pricing/Pricing";
import CreateTodo from "../components/CreateTodo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <PublicLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },

          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "pricing",
            element: <Pricing />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Register />,
          },
          {
            path: "/login",
            element: <Login />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
            loader: () => {
              return fetch("http://localhost:5000/todos", {
                credentials: "include",
              });
            },
          },
          {
            path: "todo/new",
            element: <CreateTodo />,
          },
        ],
      },
    ],
  },
]);

export default router;
