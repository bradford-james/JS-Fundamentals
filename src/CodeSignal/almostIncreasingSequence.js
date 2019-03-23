/* const almostIncreasingSequence = sequence => {
  let flag;
  let terminate = 'N';
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      flag = sequence[i];
      sequence[i] = sequence[i - 1];
      if (terminate !== 'N') {
        return false;
      }
      terminate = flag;
    }
  }
  return true;
};

almostIncreasingSequence([10, 1, 2, 3, 4, 5]);
module.exports = almostIncreasingSequence;
*/

const almostIncreasingSequence2 = sequence => {
  let remove;
  let value;
  if (sequence[0] >= sequence[2] && sequence[0] >= sequence[1]) {
    sequence.shift();
    remove = true;
  }
  [value, ...rest] = sequence;
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= value) {
      if (remove === true) return false;
      remove = true;
    } else {
      value = sequence[i];
    }
  }
  return true;
};

console.log(almostIncreasingSequence2([1, 2, 5, 3, 5]));
module.exports = almostIncreasingSequence2;

const correctSolution = seq => {
  let bad = 0;
  for (let i = 1; i < seq.length; i++)
    if (seq[i] <= seq[i - 1]) {
      bad++;
      if (bad > 1) return false;
      if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false;
    }
  return true;
};
