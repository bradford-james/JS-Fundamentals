const main = inputString => {
  inputString.shift();

  const result = inputString.map(el => {
    const arr = el.split('');
    const evenChar = [];
    const oddChar = [];
    let counter = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const char of arr) {
      if (counter % 2 === 0) {
        evenChar.push(char);
      } else {
        oddChar.push(char);
      }
      counter += 1;
    }
    return `${evenChar.join('')} ${oddChar.join('')}`;
  });
  return result;
};

module.exports = main;
