import "./GridSquare.css";

function GridSquare(props) {
  const style = {
    backgroundColor: props.color,
  };
  return (
    <div className="grid-square" style={style}>
      <p className="number">{props.val}</p>
    </div>
  );
}

export default GridSquare;
