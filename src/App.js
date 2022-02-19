import React from "react";
import "./App.css";
import Graph from "./Component/Graph";
import Input from "./Component/Input";
import Step from "./Component/Step";

function App() {
  const style = {
    color: "black",
  };
  return (
    <React.Fragment>
      <h1 style={style}>Snake and Ladder Visualizer</h1>
      <Input></Input>
      <Graph></Graph>
      <Step></Step>
    </React.Fragment>
  );
}

export default App;
