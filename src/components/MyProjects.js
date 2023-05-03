import React, { useEffect } from "react";

import * as Tone from "tone";
import Table from "./Table";

const MyProjects = () => {
  const synth = new Tone.Synth().toDestination();
  const now = Tone.now();

  const handleSoundTest = () => {
    async () => {
      await Tone.start();
      synth.triggerAttackRelease("C4", "8n", now);
      synth.triggerAttackRelease("E4", "8n", now + 0.5);
      synth.triggerAttackRelease("G4", "8n", now + 1);

      synth.triggerAttackRelease("C4", "8n", now + 1.5);
      synth.triggerAttackRelease("C4", "8n", now + 1.6);
      console.log("Async function is called, Tone.start is used");
    };
    console.log("sound should be playing");
  };

  return (
    <div id="pixelate" className="myprojects-page">
      <div>
        <button type="button" onClick={handleSoundTest}>
          Test Sound
        </button>
      </div>
      <Table />
    </div>
  );
};

export default MyProjects;
