import React from "react";
import Navbar from "./Navbar.tsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1 id="title">Prisma Skies</h1>
        <p>Press to Start</p>
      </div>
    </>
  );
}
