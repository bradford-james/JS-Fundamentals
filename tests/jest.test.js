const functionTest = require('../src/CodeSignal/matrixElementsSum');

test('practice', () => {
  const testValue = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];
  const result = 9;

  expect(functionTest(testValue)).toEqual(result);
});

test('practice', () => {
  const testValue = [[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]];
  const result = 9;

  expect(functionTest(testValue)).toEqual(result);
});
