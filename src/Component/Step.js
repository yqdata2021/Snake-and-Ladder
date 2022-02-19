import "./Step.css";
import React from "react";

function Step() {
  let step = 1;
  return (
    <React.Fragment>
      <div>
        <button type="submit" className="button-prev">
          Prev
        </button>
        <p className="step">{step}</p>
        <button type="submit" className="button-next">
          Next
        </button>
      </div>
    </React.Fragment>
  );
}

export default Step;
