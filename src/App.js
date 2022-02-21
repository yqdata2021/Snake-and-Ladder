import React, { useState, useEffect } from "react";
import "./App.css";
import Graph from "./Component/Graph";
import Input from "./Component/Input";
import Step from "./Component/Step";
import Arrow from "./Component/Arrow";

function App() {
  const [data, setData] = useState([[1]]);
  const [step, setStep] = useState(0);
  const [show, setShow] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [max, setMax] = useState(0);
  const [showSample, setShowSample] = useState(false);

  const handleInput = (enteredData) => {
    setData(
      enteredData
        .replaceAll('"', "")
        .replaceAll("[", "")
        .replaceAll("]", "")
        .split(",")
    );
    setShow(true);
  };
  const stepChangHandler = (enteredStep) => setStep(enteredStep);
  const calcHandler = (max) => setMax(max);
  const toggleHandler = () => setShowArrow((v) => !v);
  const showSampleHandler = () => setShowSample((v) => !v);

  return (
    <React.Fragment>
      <h1>Snake and Ladder Visualizer</h1>
      <a href="https://leetcode.com/problems/snakes-and-ladders/">
        Original Question
      </a>
      <br></br>
      <button onClick={showSampleHandler} className="sampleButton">
        Show Sample Input
      </button>
      {showSample ? (
        <div>
          <p className="sampleInput">
            Sample Input 1 :
            [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
          </p>
          <p>
            Sample Input 2:
            [[-1,-1,-1,46,47,-1,-1,-1],[51,-1,-1,63,-1,31,21,-1],[-1,-1,26,-1,-1,38,-1,-1],[-1,-1,11,-1,14,23,56,57],[11,-1,-1,-1,49,36,-1,48],[-1,-1,-1,33,56,-1,57,21],[-1,-1,-1,-1,-1,-1,2,-1],[-1,-1,-1,8,3,-1,6,56]]
          </p>
        </div>
      ) : (
        ""
      )}

      <Input onSaveInputData={handleInput}></Input>
      {show ? (
        <div>
          <input type="checkbox" className="checkbox" onClick={toggleHandler} />
          <span>Show Snakes and Ladders</span>
          <Graph data={data} step={step} onMaxCalc={calcHandler}></Graph>
          <Step onStepChange={stepChangHandler} data={data} max={max}></Step>
        </div>
      ) : (
        ""
      )}
      {show && showArrow ? <Arrow data={data} /> : ""}
    </React.Fragment>
  );
}

export default App;
