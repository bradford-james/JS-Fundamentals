const isCryptSolution = (crypt, solution) => {
  const convertedCrypt = crypt.map(str =>
    str
      .split('')
      .map(el => solution[solution.findIndex(solEl => solEl.includes(el))][1])
      .join('')
  );
  if (convertedCrypt.some(str => str[0] === '0' && str.length > 1)) return false;
  const parsedCrypt = convertedCrypt.map(str => parseInt(str, 10));
  return parsedCrypt[0] + parsedCrypt[1] === parsedCrypt[2];
};

isCryptSolution(
  ['SEND', 'MORE', 'MONEY'],
  [['O', '0'], ['M', '1'], ['Y', '2'], ['E', '5'], ['N', '6'], ['D', '7'], ['R', '8'], ['S', '9']]
);

module.exports = isCryptSolution;
