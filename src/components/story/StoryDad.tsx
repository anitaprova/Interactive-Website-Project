import React, { useState } from "react";
import Navbar from "../Navbar";

interface StoryPart {
  text: string;
  choices: Record<string, string>;
}

const StoryDad = () => {
  const [currentPart, setCurrentPart] = useState<string>("Beginning");

  const storyParts: Record<string, StoryPart> = {
    Beginning: {
      text: "Recently, Amari got another job that her father pressured her into getting. She doesn't enjoy the job but money is tight. She walks outside and notices the thunderstorm.",
      choices: {
        "Amari decides to wait out the storm": "WaitStorm",
        "Amari holds the umbrella in her hand  and tries to open it":
          "HoldUmbrella",
      },
    },
    WaitStorm: {
      text: "Amari decides to wait out the storm",
      choices: {
        "She returns home, finding her Dad on the sofa.": "End",
      },
    },
    HoldUmbrella: {
      text: "Amari holds the umbrella in her hand but can't seem to open it. So, she waits out the storm.",
      choices: {
        "She returns home, finding her Dad on the sofa.": "End",
      },
    },
    End: {
      text: "The End",
      choices: {},
    },
  };

  //updates the text and choices on screen 
  const updateStory = (nextPart: string) => {
    setCurrentPart(nextPart);
  };
  
  const renderChoices = () => {
    if (storyParts[currentPart].choices && Object.keys(storyParts[currentPart].choices).length > 0) 
    {
      return (
        <div className="choices">
          {Object.entries(storyParts[currentPart].choices).map(
            ([choiceText, nextPart]) => (
              <div
                className="choices-text"
                key={choiceText}
                onClick={() => updateStory(nextPart)}
              >
                {choiceText}
              </div>
            )
          )}
        </div>
      );
    }
    return null;
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="story-container">
        <div className="choices">
          {renderChoices()}
        </div>

        <div className="story-text">
          <p>{storyParts[currentPart].text}</p>
        </div>
      </div>
    </>
  );
};

export default StoryDad;
