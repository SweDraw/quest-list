import { isEmptyArray, isEqualStringArray } from '../utils/array';

test("Check enter element is empty array", () => {
  expect(isEmptyArray(["yes"])).toBe(false);
  expect(isEmptyArray([])).toBe(true);
  expect(isEmptyArray("")).toBe(false);
});

test("Check is two array what containse string is equal", () => {
  expect(isEqualStringArray([], [])).toBe(true);
  expect(isEqualStringArray([""], [])).toBe(false);
  expect(isEqualStringArray([""], [""])).toBe(true);
  expect(isEqualStringArray(["test"], ["test", "test"])).toBe(false);
  expect(isEqualStringArray(["test", "test"], ["test", "test"])).toBe(true);
});
