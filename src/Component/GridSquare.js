import "./GridSquare.css";

function GridSquare(props) {
  const style = {
    backgroundColor: props.color,
  };
  return (
    <div className="grid-square" style={style}>
      <h2 className="number">{props.val}</h2>
    </div>
  );
}

export default GridSquare;
