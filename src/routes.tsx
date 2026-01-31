import { createBrowserRouter } from "react-router-dom";
import Layout from "./screens/Layout";
import Home from "./screens/Home";
import ErrorPage from "./screens/ErrorPage";
import Search from "./screens/Search";
import SignIn from "./screens/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      //   {
      //     path: "games/:slug",
      //     element: <GameDetail />,
      //   },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
