const shapeArea = n => {
  if (n === 1) return 1;
  return (n - 1) * 4 + shapeArea(n - 1);
};

module.exports = shapeArea;
