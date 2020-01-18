import { isEmptyString } from '../utils/element';

test("Check enter element is empty string", () => {
  expect(isEmptyString(["yes"])).toBe(false);
  expect(isEmptyString([])).toBe(false);
  expect(isEmptyString("")).toBe(true);
});
