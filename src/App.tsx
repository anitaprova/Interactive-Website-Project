import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Statistics from "./components/Statistics";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/stats",
    element: <Statistics />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
