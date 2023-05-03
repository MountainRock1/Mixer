import React, { useEffect, useState } from "react";
import * as Tone from "tone";

const Table = () => {
  const [grid, setGrid] = useState([]);

  const synth = new Tone.Synth().toDestination();
  // it seems like when you remove now from the triggerAttackRelease method, it stops giving you warnings
  const now = Tone.now();

  const handleSound = (event) => {
    console.log(event.target.innerText);
    synth.triggerAttackRelease(`${event.target.innerText}`, "8n");
    console.log(`Should produce the tagname: ${event.target.tagName}`);
    console.log(`should be playing`);
    // can i change the color of a grid using event parameter
    if (!event.target.style.backgroundColor) {
      event.target.style.backgroundColor = "greenyellow";
    } else {
      event.target.style.backgroundColor = "";
    }
  };

  const myScale = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];

  return (
    <table>
      <thead>
        <tr>
          <th>Piano</th>
        </tr>
      </thead>

      <tbody>
        {myScale.map((element) => {
          return (
            <tr>
              {myScale.map((musicalNote) => {
                return <td onClick={(ev) => handleSound(ev)}>{musicalNote}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
