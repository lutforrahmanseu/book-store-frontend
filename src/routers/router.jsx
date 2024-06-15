import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import SingleBook from "../pages/shop/SingleBook";
import Dashboard from "../dashboard/Dashboard";
import DashboardLayout from "../dashboard/DashboardLayout";
import Upload from "../dashboard/Upload";
import Manage from "../dashboard/Manage";
import Edit from "../dashboard/Edit";
import Singup from "../pages/singup/Singup";
import Login from "../pages/login/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Logout from "../pages/logout/Logout";

export const router = createBrowserRouter([
  // frontend layout
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
    ],
  },
  // Admin layout
  {
    path: "/admin/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard/upload",
        element: <Upload />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <Manage />,
      },
      {
        path: "/admin/dashboard/edit/:id",
        element: <Edit />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
    ],
  },
  {
    path: "/sign-up",
    element: <Singup />,
  },
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout /> },
]);
