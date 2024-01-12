import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Statistics from "./components/Statistics";
import Contact from "./components/Contact";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/characters",
        element: <Characters />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]
  }
]); 

export default function App() {
  return <RouterProvider router={router} />;
}
