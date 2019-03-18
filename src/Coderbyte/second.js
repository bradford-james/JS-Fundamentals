const padNum = (num, type) => {
  let value = num.toString();
  for (let i = value.length; i < 4; i++) {
    value = type === 'l' ? `${value}0` : `0${value}`;
  }
  return value;
};

const steady = 6174;
let counter = 0;

const KaprekarsConstant = num => {
  if (num === steady) return counter;
  const str = num.toString();
  const arr = str.split('');

  const small = arr.sort((a, b) => a - b).join('');
  const fSmall = padNum(small, 's');
  const large = arr.sort((a, b) => b - a).join('');
  const fLarge = padNum(large, 'l');

  const result = fLarge - fSmall;
  counter += 1;

  return KaprekarsConstant(result);
};
