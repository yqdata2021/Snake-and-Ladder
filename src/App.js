import React, { useState } from "react";
import "./App.css";
import Graph from "./Component/Graph";
import Input from "./Component/Input";
import Step from "./Component/Step";

function App() {
  const [data, setData] = useState([[1]]);
  const [step, setStep] = useState(0);
  const [show, setShow] = useState(false);
  const [max, setMax] = useState(0);
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

  return (
    <React.Fragment>
      <h1>Snake and Ladder Visualizer</h1>
      <Input onSaveInputData={handleInput}></Input>
      {show ? (
        <Graph data={data} step={step} onMaxCalc={calcHandler}></Graph>
      ) : (
        ""
      )}
      {show ? (
        <Step onStepChange={stepChangHandler} data={data} max={max}></Step>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default App;
