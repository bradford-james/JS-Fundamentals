const firstFactorial = num => {
  if (num === 1) {
    return 1;
  }

  return num * firstFactorial(num - 1);
};

console.log(firstFactorial(6));
module.exports = firstFactorial;
