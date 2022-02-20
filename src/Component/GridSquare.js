import "./GridSquare.css";
import { useState } from "react";

function GridSquare(props) {
  console.log(props.map);

  let borderColor;
  if (props.map && props.map.has(props.row + " " + props.col))
    borderColor = "red";
  else borderColor = "azure";

  const style = {
    backgroundColor: props.color,
    borderColor: borderColor,
  };

  const handleMouseEnter = () => {
    const cor = {
      row: props.row,
      col: props.col,
    };
    props.onEnlighten(cor);
  };
  const handleMouseLeave = () => {
    props.onEnlighten({});
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
