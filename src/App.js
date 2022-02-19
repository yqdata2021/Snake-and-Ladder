import React, { useState } from "react";
import "./App.css";
import Graph from "./Component/Graph";
import Input from "./Component/Input";
import Step from "./Component/Step";

function App() {
  const [data, setData] = useState([]);
  const [step, setStep] = useState(0);
  const handleInput = (enteredData) =>
    setData(
      enteredData
        .replaceAll('"', "")
        .replaceAll("[", "")
        .replaceAll("]", "")
        .split(",")
    );
  const stepChangeHandler = (enteredStep) => setStep(enteredStep);

  return (
    <React.Fragment>
      <h1>Snake and Ladder Visualizer</h1>
      <Input onSaveInputData={handleInput}></Input>
      <Graph data={data} step={step}></Graph>
      <Step onStepChange={stepChangeHandler} data={data}></Step>
    </React.Fragment>
  );
}

export default App;
