const testFunction = require('../src/HackerRank/day6Review');

test('practice', () => {
  const testValue = [2, 'Hacker', 'Rank'];
  const result = ['Hce akr', 'Rn ak'];

  expect(testFunction(testValue)).toEqual(result);
});
