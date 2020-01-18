import { isChecked, isEmptyField, isHaveEmptyFieldForm } from '../utils/form-check';

test("Check enter element is empty string or array of string", () => {
  expect(isEmptyField(["yes"])).toBe(false);
  expect(isEmptyField([])).toBe(true);
  expect(isEmptyField("")).toBe(true);
});

test(`
Test isHaveEmptyFieldForm.
Get object with reselt of submite form with values string or string array
`, () => {
  expect(
    isHaveEmptyFieldForm({
      test: ""
    })
  ).toBe(true);
  expect(
    isHaveEmptyFieldForm({
      test: []
    })
  ).toBe(true);
  expect(
    isHaveEmptyFieldForm({
      test: "",
      test2: "test"
    })
  ).toBe(true);
  expect(
    isHaveEmptyFieldForm({
      test: ["test"],
      test2: "test"
    })
  ).toBe(false);
});

test(`
  Test isChecked. 
  If beforeValue or valueString is undefined return false.
  If get radiobutton check equal this string with value before set
  If get checkbox string array split string to 
`, () => {
  expect(isChecked("radio", "", undefined)).toBe(false);
  expect(isChecked("radio", undefined, "")).toBe(false);
  expect(isChecked("radio", "", "")).toBe(true);
  expect(isChecked("radio", "test", "")).toBe(false);
  expect(isChecked("radio", "test", "test")).toBe(true);
  expect(isChecked("radio", "test, test", "test")).toBe(false);
  expect(isChecked("radio", "test", "test, test")).toBe(false);
});
