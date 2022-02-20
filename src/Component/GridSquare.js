import "./GridSquare.css";
import { useState } from "react";

function GridSquare(props) {
  const [borderColor, setBorderColor] = useState("azure");
  const style = {
    backgroundColor: props.color,
    borderColor: borderColor,
  };

  const handleMouseEnter = () => {
    setBorderColor("red");
  };
  const handleMouseLeave = () => {
    setBorderColor("azure");
  };

  return (
    <div
      className="grid-square"
      style={style}
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
    >
      <p className="number">{props.val}</p>
    </div>
  );
}

export default GridSquare;
