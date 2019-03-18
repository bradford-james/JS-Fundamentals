const centuryFromYears = require('../src/CodeSignal/centuryFromYear');

test('practice', () => {
  expect(centuryFromYears(1905)).toEqual(20);
});
