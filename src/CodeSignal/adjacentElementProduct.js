const adjacentElementsProduct = input => {
  let largestProduct = input[0] * input[1];
  for (let i = 1; i < input.length; i++) {
    const product = input[i] * input[i - 1];
    largestProduct = product > largestProduct ? product : largestProduct;
  }
  return largestProduct;
};
module.exports = adjacentElementsProduct;
