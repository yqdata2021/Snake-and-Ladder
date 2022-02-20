import React from "react";
import Xarrow from "react-xarrows";

function Arrow(props) {
  let n = Math.trunc(Math.sqrt(props.data.length));
  const mark = [];
  const processedData = [];
  let temp = props.data.length;
  let counter = 0;
  for (let i = 0; i < n; i++) {
    mark.push([]);
    processedData.push([]);
    for (let j = 0; j < n; j++) {
      mark[i][j] = temp--;
      processedData[i][j] = parseInt(props.data[counter++]);
    }
  }
  for (let i = n % 2 == 0 ? 1 : 0; i < n; i += 2) mark[i].reverse();
  const Arrows = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (processedData[i][j] >= 0)
        Arrows.push(
          <Xarrow
            start={mark[i][j].toString()}
            end={processedData[i][j].toString()}
            color="red"
            key={Math.random()}
          />
        );
    }
  }

  return <div>{Arrows}</div>;
}

export default Arrow;
