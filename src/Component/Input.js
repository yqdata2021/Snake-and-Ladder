import React, { useState } from "react";
import "./Input.css";

function Input(props) {
  const [enteredData, setEnteredData] = useState("");
  const dataChangeHandler = (event) => {
    setEnteredData(event.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSaveInputData(enteredData);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <p>Paste Your Input Board Here:</p>
      <textarea
        type="box"
        placeholder="Input Box"
        className="Input"
        onChange={dataChangeHandler}
      ></textarea>
      <button type="submit" className="button">
        Set Input
      </button>
    </form>
  );
}

export default Input;
