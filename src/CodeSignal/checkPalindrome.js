const palSimple = input => {
  return (
    input ===
    input
      .split('')
      .reverse()
      .join('')
  );
};

module.exports = palSimple;

const checkPalindrome = inputString => {
  let firstHalf;
  let secondHalf;

  if (inputString.length % 2 === 0) {
    firstHalf = inputString.substring(0, inputString.length / 2);
    secondHalf = inputString.substring(inputString.length / 2);
  } else {
    firstHalf = inputString.substring(0, inputString.length / 2 - 0.5);
    secondHalf = inputString.substring(inputString.length / 2 + 0.5);
  }

  const reverseSecondHalf = secondHalf
    .split('')
    .reverse()
    .join('');
  return firstHalf === reverseSecondHalf;
};

module.exports = checkPalindrome;

checkPalindrome('aabaa');

const checkPalRedux = input => {
  let result = true;
  for (let i = 0; i < input.length / 2; i++) {
    result = input[i] === input[input.length - i - 1];
    if (!result) break;
  }
  return result;
};

module.exports = checkPalRedux;
