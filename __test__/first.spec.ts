import sum from '../src/first';

describe('Check env', () => {
  test('should return sum', () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });
});