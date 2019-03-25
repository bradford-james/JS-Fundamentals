const rotateImage = a => {
  const rotatedMatrix = [[]];
  for (let i = 0; i < a.length; i++) {
    const set = [];
    for (let j = a[0].length - 1; j >= 0; j--) {
      set.push(a[j][i]);
    }
    rotatedMatrix[i] = set;
  }
  return rotatedMatrix;
};

module.exports = rotateImage;

const tryIt = a => a.map((row, rowIndex) => a.map(val => val[rowIndex]).reverse());

tryIt([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
