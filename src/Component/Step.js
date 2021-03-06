import "./Step.css";
import React, { useEffect, useState } from "react";

function Step(props) {
  const [step, setStep] = useState(0);
  const onPlus = () => {
    if (step >= props.max) return;
    setStep((prevState) => prevState + 1);
  };
  const onMinus = () => {
    if (step === 0) return;
    setStep((prevState) => prevState - 1);
  };

  useEffect(() => {
    setStep(0);
  }, [props.data]);

  useEffect(() => {
    props.onStepChange(step);
  }, [step]);

  return (
    <React.Fragment>
      <div className="form">
        <button className="button-prev" onClick={onMinus}>
          Prev Step
        </button>
        <p className="step">{step}</p>
        <button className="button-next" onClick={onPlus}>
          Next Step
        </button>
      </div>
    </React.Fragment>
  );
}

export default Step;
