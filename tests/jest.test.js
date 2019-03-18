const checkPalindrome = require('../src/CodeSignal/checkPalindrome');
const checkPalRedux = require('../src/CodeSignal/checkPalindrome');
const palSimple = require('../src/CodeSignal/checkPalindrome');

test('practice', () => {
  expect(checkPalindrome('abfba')).toEqual(true);
});

test('practice2', () => {
  expect(checkPalindrome('abba')).toEqual(true);
});

test('practiceRedux', () => {
  expect(checkPalRedux('abba')).toEqual(true);
});

test('practiceRedux2', () => {
  expect(checkPalRedux('abfba')).toEqual(true);
});

test('practiceSimple', () => {
  expect(palSimple('abba')).toEqual(true);
});

test('practiceSimple2', () => {
  expect(palSimple('abfba')).toEqual(true);
});
