import GridSquare from "./GridSquare";
import "./Graph.css";
import { useEffect } from "react";

function Graph(props) {
  useEffect(() => {
    console.log("eee");
  }, [props.step]);
  // ----------------- set up block number -----------------
  let n = Math.sqrt(props.data.length);
  let style = {
    gridTemplateColumns: `repeat(${n}, 1fr)`,
    gridTemplateRows: `repeat(${n}, 1fr)`,
  };
  let counter = 0;
  const mark = [];
  const processedData = [];
  let temp = n * n;
  for (let i = 0; i < n; i++) {
    mark.push([]);
    processedData.push([]);
    for (let j = 0; j < n; j++) {
      mark[i][j] = temp--;
      processedData[i][j] = parseInt(props.data[counter++]);
    }
  }
  for (let i = n % 2 == 0 ? 1 : 0; i < n; i += 2) mark[i].reverse();

  //  --------------- Determin needed steps with BFS ---------------
  const coordinates = [];
  const solve = (board) => {
    const visited = new Set();
    const q = [];
    q.push(1);
    coordinates.push([intToCoordinate(1)]);
    console.log(coordinates);
    visited.add(1);
    let count = 0;

    while (q.length > 0) {
      const size = q.length;
      const arr = [];
      for (let i = 0; i < size; i++) {
        let temp = q.shift();
        for (let j = 1; j <= 6; j++) {
          let target = temp + j;
          if (target > n * n) continue;
          if (visited.has(target)) continue;
          const res = intToCoordinate(target);
          visited.add(target);
          q.push(board[res[0]][res[1]] === -1 ? target : board[res[0]][res[1]]);
          arr.push([res[0], res[1]]);
        }
      }
      count++;
      coordinates.push(arr);
      if (visited.has(n * n)) break;
    }

    function intToCoordinate(x) {
      let row = n - 1 - Math.trunc((x - 1) / n);
      let column = 0;
      if (n % 2 === row % 2) {
        column = n - 1 - ((x - 1) % n);
      } else if (n % 2 !== row % 2) {
        column = (x - 1) % n;
      }
      return [row, column];
    }
  };
  solve(processedData);

  // ----------------- set up color gradient ----------------
  const colorGradient = [];
  let r = 255;
  let g = 255;
  let b = 0;
  const diff = Math.trunc(220 / n / n);
  for (let i = 0; i < n * n; i++) {
    colorGradient.push(`rgb(${r},${g},${b})`);
    // g -= diff;
    b += diff;
    r -= diff;
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
    const pickedColor = colorGradient[i * n];
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
          val={mark[row][col]}
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
