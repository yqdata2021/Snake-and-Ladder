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

  // ----------------- algo -----------------
  // 1. parse data into 2-D array
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
    q.push(1);
    coordinates.push([intToCoordinate(1)]);
    visited.add(1);
    let count = 0;

    while (q.length > 0) {
      const size = q.length;
      const arr = [];
      for (let i = 0; i < size; i++) {
        let temp = q.shift();
        for (let j = 1; j <= 6; j++) {
          let target = temp + j;
          if (target > len * len) continue;
          if (visited.has(target)) continue;
          const res = intToCoordinate(target);
          visited.add(target);
          q.push(
            processedData[res[0]][res[1]] === -1
              ? target
              : processedData[res[0]][res[1]]
          );
          arr.push([res[0], res[1]]);
        }
      }
      count++;
      coordinates.push(arr);
      if (visited.has(len * len)) break;
    }

    return count;
    function intToCoordinate(n) {
      let row = len - 1 - Math.trunc((n - 1) / len);
      let column = 0;
      if (len % 2 === row % 2) {
        column = len - 1 - ((n - 1) % len);
      } else if (len % 2 !== row % 2) {
        column = (n - 1) % len;
      }
      return [row, column];
    }
  };
  const stepsNeedToTake = solve(processedData);

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

  // ----------------- set up color board -----------------
  const colorBoard = [];

  for (let i = 0; i < n; i++) {
    colorBoard.push([]);
    for (let j = 0; j < n; j++) {
      colorBoard[i][j] = "grey";
    }
  }

  for (let i = 0; i <= props.step; i++) {
    const pickedColor = colorGradient[i * n - 1];
    for (let j = 0; j < coordinates[i].length; j++) {
      colorBoard[coordinates[i][j][0]][coordinates[i][j][1]] = pickedColor;
    }
  }

  // ----------------- render graph -----------------
  const grid = [];
  for (let row = 0; row < n; row++) {
    grid.push([]);
    for (let col = 0; col < n; col++) {
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
