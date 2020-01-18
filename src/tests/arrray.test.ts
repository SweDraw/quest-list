import { isEmptyArray } from '../utils/array';

test("Check enter element is empty array", () => {
  expect(isEmptyArray(["yes"])).toBe(false);
  expect(isEmptyArray([])).toBe(true);
  expect(isEmptyArray("")).toBe(false);
});
