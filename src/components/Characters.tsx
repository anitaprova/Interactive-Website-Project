import React from "react";
import Navbar from "./Navbar";

export default function Characters() 
{
	return (
    <>
      <Navbar></Navbar>
      <h1>Characters</h1>
      <div className="characterblock">
        <div>
          <p>Amari Inaya</p>
          <p>
            Personality Traits: People-pleaser, Complacent/fickle, Observant,
            Shy
          </p>
          <p>
            Occupation: Dropped out of college after her freshman year for her
            brother to go to college
          </p>
          <p>Fun Fact: Journals to cope</p>
        </div>

        <div>
          <p>Benoni Inaya</p>
          <p>Personality Traits: Bad temper</p>
          <p>Occupation: College Student</p>
          <p>Fun Fact: His friend died</p>
        </div>

        <div>
          <p>Amari's Father</p>
          <p>Personality Traits: Absent minded and horrible communicator</p>
          <p>Occupation: Failing Business Owner</p>
          <p>Fun Fact: He has no fun facts!</p>
        </div>

        <div>
          <img src="./src/assets/vincent.png" width="500" height="600"></img>
          <p>Vincent Legend</p>
          <p>
            Personality Traits: Manipulative, gaslight gatekeep, but no
            girlboss, narcissistic
          </p>
          <p>Occupation: Job in his family's business</p>
          <p>
            Fun Fact: His real name is Mohammad but he changed it to Vincent
            Legend
          </p>
        </div>

        <div>
          <p>Aurora</p>
          <p>Personality Traits: Well meaning</p>
          <p>Occupation: Good Student</p>
          <p>Fun Fact: Very Broke</p>
        </div>
      </div>
    </>
  );
}
