function Graph() {
  const grid = [];
  for (let row = 0; row < 3; row++) {
    grid.push([]);
    for (let col = 0; col < 3; col++) {
      grid[row].push(<GridSquare key={`${col}${row}`} color="1" />);
    }
  }

  return <p>this is graph Component</p>;
}

export default Graph;
