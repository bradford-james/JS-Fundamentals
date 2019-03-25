const sudoku2 = grid => {
  const rowCheck = [[], [], [], [], [], [], [], [], []];
  const gridCheck = [[], [], [], [], [], [], [], [], []];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] !== '.') {
        if (j !== grid[i].lastIndexOf(grid[i][j])) return false;

        if (rowCheck[j].includes(grid[i][j])) return false;
        rowCheck[j].push(grid[i][j]);

        const defineGrid = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (gridCheck[defineGrid].includes(grid[i][j])) return false;
        gridCheck[defineGrid].push(grid[i][j]);
      }
    }
  }
  return true;
};

sudoku2([
  ['.', '.', '.', '1', '4', '.', '.', '2', '.'],
  ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
  ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
  ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
  ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '7', '.']
]);

module.exports = sudoku2;
