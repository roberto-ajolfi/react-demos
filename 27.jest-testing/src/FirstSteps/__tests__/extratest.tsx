import { sum } from '../service';

test('adds 10 + 3 to equal 13', () => {
  expect(sum(10,3)).toBe(13);
});