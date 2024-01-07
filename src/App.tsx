import React from "react";
import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import Characters from "./components/Characters.tsx";
import Statistics from "./components/Statistics.tsx";
import Contact from "./components/Contact.tsx";
import "./index.css";
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
