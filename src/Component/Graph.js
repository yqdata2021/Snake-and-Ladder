import GridSquare from "./GridSquare";
import "./Graph.css";

function Graph(props) {
  // ----------------- set up block number -----------------
  let n = Math.sqrt(props.data.length);
  let style = {
    gridTemplateColumns: `repeat(${n}, 1fr)`,
  };
  let number = [];
  let temp = n * n;
  for (let i = 0; i < n; i++) {
    number.push([]);
    for (let j = 0; j < n; j++) {
      number[i][j] = temp--;
    }
  }
  for (let i = n % 2 == 0 ? 1 : 0; i < n; i += 2) number[i].reverse();

  // ----------------- set up color gradient ----------------
  const colorGradient = [];
  let r = 0;
  let g = 248;
  let b = 255;
  const diff = Math.trunc(230 / n / n);
  for (let i = 0; i < n * n; i++) {
    colorGradient.push(`rgb(${r},${g},${b})`);
    g -= diff;
    b -= diff;
  }

  // ----------------- algo -----------------
  // 1. parse data into 2-D array
  console.log(props.data);
  const processedData = [];
  let counter = 0;
  for (let i = 0; i < n; i++) {
    processedData.push([]);
    for (let j = 0; j < n; j++) {
      processedData[i][j] = parseInt(props.data[counter++]);
    }
  }
  // 2. determin needed steps with BFS
  const coordinates = [];
  const solve = (board) => {
    const len = board.length;
    const visited = new Set();
    const q = [];

    const intToCoordinate = (n) => {
      const row = n - 1 - Math.trunc((n - 1) / len);
    };
  };
  const stepsNeedToTake = solve(processedData);

  // ----------------- set up color board -----------------
  const colorBoard = [];

  for (let i = 0; i < n; i++) {
    colorBoard.push([]);
    for (let j = 0; j < n; j++) {
      colorBoard[i][j] = "grey";
    }
  }

  // ----------------- render graph -----------------
  const grid = [];
  for (let row = 0; row < n; row++) {
    grid.push([]);
    for (let col = 0; col < n; col++) {
      if (row === n - 1 && col === 0) {
        grid[row].push(
          <GridSquare
            val={number[row][col]}
            color={"green"}
            key={Math.random()}
          />
        );
      } else
        grid[row].push(
          <GridSquare
            val={number[row][col]}
            color={colorBoard[row][col]}
            key={Math.random()}
          />
        );
    }
  }

  return (
    <div className="grid" style={style}>
      {grid}
    </div>
  );
}

export default Graph;
