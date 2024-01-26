import React from "react";
import Navbar from "./Navbar.tsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Prisma Skies</h1>
        <img
          src="./src/assets/pole1.png"
          id="homepage-image"
          useMap="#image-map"
        ></img>

        <map name="image-map">
          <area
            target=""
            alt="Dad"
            title="Red"
            href="/story-dad"
            coords="110,489,2,484,0,0,1918,0,1918,63,305,495"
            shape="poly"
          />
          <area
            target=""
            alt="Benoni"
            title="Pink"
            href=""
            coords="0,486,300,496,1917,64,1918,492,1420,443,-2,981"
            shape="poly"
          />
          <area
            target=""
            alt="Vincent"
            title="Grey"
            href=""
            coords="0,981,-2,1076,207,1076,417,962,785,866,1129,801,1208,711,1918,811,1917,496,1425,444,78,954,42,966"
            shape="poly"
          />
          <area
            target=""
            alt="Aurora"
            title="Yellow"
            href=""
            coords="208,1076,412,963,934,835,1132,799,1207,714,1915,817,1917,1076"
            shape="poly"
          />
        </map>
        <p>Press Any of the Fragments to Start</p>
      </div>
    </>
  );
}
