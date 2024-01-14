import React from "react";
import Navbar from "./Navbar";
import data from "../data.json";
// console.log(data);

export default function Characters() {
  const character_sheet = data.characters;
  
  return (
    <>
      <Navbar></Navbar>
      <h1>Characters</h1>
      <div className="character-container">
        {character_sheet.map((item) => (
          <div className="character-item">
            <img src={item.img} width="500" height="500"></img>
            <div className="character-text">
              <h2>{item.Name}</h2>
              <p>Personality Traits: {item["Personality Traits"]}</p>
              <p>Occupation: {item.Occupation}</p>
              <p>Fun Fact: {item["Fun Fact"]}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
