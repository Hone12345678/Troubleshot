const {capital_category} = require('../utils/helpers');

test('capital_category() returns a string with the first letter capitalized', () => {
  const word = capital_category('pizza');

  expect(word).toBe('Pizza');
});