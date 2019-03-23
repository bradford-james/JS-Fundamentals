const matrixElementsSum = matrix => {
  const eligibleIndex = new Set();

  return matrix.reduce((agg, val) => {
    let sum = 0;
    val.forEach((el, i) => {
      if (!eligibleIndex.has(i)) {
        sum += el;
        if (el === 0) eligibleIndex.add(i);
      }
    });
    return sum + agg;
  }, 0);
};

// matrixElementsSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]);
module.exports = matrixElementsSum;

function matrixElementsSum2(matrix) {
  for (var r = 0, j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 0) break;
      else r += matrix[i][j];
    }
  }
  return r;
}
matrixElementsSum2([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]);
