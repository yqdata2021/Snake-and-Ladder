import GridSquare from "./GridSquare";
import "./Graph.css";
import { useEffect, useState } from "react";

function Graph(props) {
  const [lightMap, setLightMap] = useState(new Set());
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

  // ---------------- build adjancy list for highlighting ----------
  let map = {};

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (processedData[i][j] === -1) continue;
      let cor = intToCoordinate(processedData[i][j]);
      if (!map[i + " " + j]) map[i + " " + j] = [];

      if (!map[cor[0] + " " + cor[1]]) map[cor[0] + " " + cor[1]] = [];
      map[i + " " + j].push(cor);

      map[cor[0] + " " + cor[1]].push([i, j]);
    }
  }
  const englightenHandler = (cor) => {
    // updating light map
    setLightMap(new Set());
    setLightMap((x) => {
      if (map[cor.row + " " + cor.col]) {
        let arr = map[cor.row + " " + cor.col];
        x.add(cor.row + " " + cor.col);
        for (let i = 0; i < arr.length; i++) {
          x.add(arr[i][0] + " " + arr[i][1]);
        }
        return x;
      }
    });
  };
  //  --------------- Determin needed steps with BFS ---------------
  const coordinates = [];
  const solve = (board) => {
    const visited = new Set();
    const q = [];
    let count = 0;
    q.push(1);
    coordinates.push([intToCoordinate(1)]);
    visited.add(1);
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
      if (visited.has(n * n)) return count;
    }
  };
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
  const max = solve(processedData);
  props.onMaxCalc(max);

  // ----------------- set up color gradient ----------------
  const colorGradient = [];
  let r = 120;
  let g = 100;
  let b = 30;
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
          row={row}
          col={col}
          onEnlighten={englightenHandler}
          map={lightMap}
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
