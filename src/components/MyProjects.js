import React, { useEffect } from "react";
import ColorSelector from "./ColorSelector";
import Table from "./table";
import { useDispatch } from "react-redux";
import { addRow } from "../stateSlice.js";
import { useSelector } from "react-redux";

import * as Tone from "tone";

//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();
const now = Tone.now();

//play a middle 'C' for the duration of an 8th note

const MyProjects = () => {
  const dispatch = useDispatch();
  const { grid } = useSelector((state) => state.stateValues);

  const handleAddRowClick = () => {
    dispatch(addRow());
  };

  useEffect(() => {
    const sounds = Array.from(document.querySelectorAll("td"));
    console.log("UseEffect grid", sounds);

    sounds.forEach(function (element) {
      for (let i = 0; element.length > i; i++) {
        console.log(element[i] === "red");
        element[i].onclick = () =>
          synth.triggerAttackRelease(`C${i + 1}`, "8n", now);

        // element[i].addEventListener("click", function () {
        //   //this function does stuff
        //   synth.triggerAttackRelease(`C${i + 1}`, "8n", now);
        // });
      }
    });

    // console.log("sounds", sounds);
    // grid.forEach((element) => {
    //   console.log("element", element);
    //   for (let i = 0; element.length > i; i++) {
    //     console.log(element[i] === "red");
    //   }
    // });
  }, [grid.length]);

  const handleSound = () => {
    console.log("sound should be playing");
    // synth.triggerAttackRelease("C4", "8n", now);
    // synth.triggerAttackRelease("E4", "8n", now + 0.5);
    // synth.triggerAttackRelease("G4", "8n", now + 1);

    synth.triggerAttackRelease("C4", "8n", now + 1.5);
    synth.triggerAttackRelease("C4", "8n", now + 1.6);
    // synth.triggerAttackRelease("C4", "8n", now + 1.6);

    synth.triggerAttackRelease("C4", "8n", now + 2.0);
    synth.triggerAttackRelease("C4", "8n", now + 2.1);

    synth.triggerAttackRelease("C4", "8n", now + 2.5);
    synth.triggerAttackRelease("E4", "8n", now + 3.0);
    synth.triggerAttackRelease("G4", "8n", now + 3.5);

    synth.triggerAttackRelease("C4", "8n", now + 4.0);
    synth.triggerAttackRelease("C4", "8n", now + 4.1);

    synth.triggerAttackRelease("C4", "8n", now + 4.5);
    synth.triggerAttackRelease("C4", "8n", now + 4.6);

    synth.triggerAttackRelease("C4", "8n", now + 4.8);

    synth.triggerAttackRelease("C4", "2n", now + 5.0);

    //   // create two monophonic synths
    //   const synthA = new Tone.FMSynth().toDestination();
    //   const synthB = new Tone.AMSynth().toDestination();
    //   //play a note every quarter-note
    //   const loopA = new Tone.Loop((time) => {
    //     // synthA.triggerAttackRelease("C2", "8n", time);
    //     synth.triggerAttackRelease("C4", "8n", time);
    //     synth.triggerAttackRelease("E4", "8n", time + 0.5);
    //     synth.triggerAttackRelease("G4", "8n", time + 1);
    //   }, "8n").start(0);
    //   //play another note every off quarter-note, by starting it "8n"
    //   // const loopB = new Tone.Loop((time) => {
    //   //   synthB.triggerAttackRelease("C4", "8n", time);
    //   // }, "4n").start("8n");
    //   // all loops start until the Transport is started
    //   Tone.Transport.start();

    //   // synth.triggerAttackRelease("C4", "8n", now);
    //   // synth.triggerAttackRelease("E4", "8n", now + 0.5);
    //   // synth.triggerAttackRelease("G4", "8n", now + 1);
    //   // trigger the attack immediately
    //   // synth.triggerAttack("C4", now);
    //   // wait one second before triggering the release
    //   // synth.triggerRelease(now + 3);
    //   // synth.triggerAttackRelease("C4", "8n");
    //   // sound.play();
  };
  return (
    <div id="pixelate">
      <div>
        <button id="add-row" onClick={handleAddRowClick}>
          Start
        </button>

        {/* <button type="button" onClick={handleSound}>
          Sound 1
        </button> */}
        <ColorSelector />
      </div>
      <Table />
    </div>
  );
};

export default MyProjects;
