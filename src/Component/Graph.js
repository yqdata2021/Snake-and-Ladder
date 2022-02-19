import GridSquare from "./GridSquare";
import "./Graph.css";

function Graph() {
  let sample1 =
    "[[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]";
  // set up data
  let data = sample1.split(",");
  for (let i = 0; i < data.length; i++)
    data[i] = data[i].replaceAll("[", "").replaceAll("]", "");

  //set up block number
  let n = Math.sqrt(data.length);
  let style = {
    "grid-template-columns": `repeat(${n}, 1fr)`,
  };
  let number = [];
  let temp = n * n;
  for (let i = 0; i < n; i++) {
    number.push([]);
    for (let j = 0; j < n; j++) {
      number[i][j] = temp--;
    }
  }
  if (n % 2 == 0) {
    for (let i = 1; i < n; i += 2) {
      number[i].reverse();
    }
  } else {
    for (let i = 0; i < n; i += 2) {
      number[i].reverse();
    }
  }
  const grid = [];
  for (let row = 0; row < n; row++) {
    grid.push([]);
    for (let col = 0; col < n; col++) {
      grid[row].push(<GridSquare val={number[row][col]} />);
    }
  }

  return (
    <div className="grid" style={style}>
      {grid}
    </div>
  );
}

export default Graph;
