const {capitalize_first} = require('../utils/helpers');

test('capitalize_first() returns a string with the first letter capitalized', () => {
  const word = capitalize_first('pizza');

  expect(word).toBe('Pizza');
});