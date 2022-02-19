import React from "react";
import "./Input.css";

function Input() {
  let data = "";

  return (
    <React.Fragment>
      <p>Paste Your Input Board Here:</p>
      <textarea type="box" placeholder="Input Box" className="Input"></textarea>
      <button type="submit" className="button">
        Set Input
      </button>
    </React.Fragment>
  );
}

export default Input;
