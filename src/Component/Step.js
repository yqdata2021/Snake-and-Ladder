import "./Step.css";
import React, { useState } from "react";

function Step(props) {
  const [step, setStep] = useState(0);
  const onPlus = () => {
    if (step >= Math.sqrt(props.data.length)) return;
    setStep((prevState) => prevState + 1);
    props.onStepChange(step);
  };
  const onMinus = () => {
    if (step === 0) return;
    setStep((prevState) => prevState - 1);
    props.onStepChange(step);
  };

  return (
    <React.Fragment>
      <div className="form">
        <button className="button-prev" onClick={onMinus}>
          Prev
        </button>
        <p className="step">{step}</p>
        <button className="button-next" onClick={onPlus}>
          Next
        </button>
      </div>
    </React.Fragment>
  );
}

export default Step;
