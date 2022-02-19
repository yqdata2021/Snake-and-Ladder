import "./GridSquare.css";

function GridSquare(props) {
  return (
    <div className="grid-square">
      <h2 className="number">{props.val}</h2>
    </div>
  );
}

export default GridSquare;
