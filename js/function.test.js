const sum = require('./function');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -10 + 20 to equal 10', () => {
  expect(sum(-10, 20)).toBe(10);
});