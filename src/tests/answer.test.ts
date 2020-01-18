import { getRightAnswerList, isRightAnswer } from '../utils/answer';

test("Test isRightAnswer if get string in user answer and right answer should return true if they equal", () => {
  expect(isRightAnswer("yes", "yes")).toBe(true);
  expect(isRightAnswer("yes", "no")).toBe(false);
});

test("Test isRightAnswer. If get array in right answer with one elemnet and user answer equal return true, else false", () => {
  expect(isRightAnswer("yes", ["yes"])).toBe(true);
  expect(isRightAnswer("yes,no", ["no"])).toBe(false);
});
test("Test isRightAnswer. If get array in right answer with more then one element, and user answer not comtains comma to separate element return fasle anyway", () => {
  expect(isRightAnswer("yes", ["yes", "no"])).toBe(false);
});
test(`Test isRightAnswer. If rightAnswer is array and userAnswer contain comma to separate element. If separate element number more/less then is rightAnswer return false. If all element in arraies equal return true else false`, () => {
  expect(isRightAnswer("yes,no", ["yes", "no"])).toBe(true);
  expect(isRightAnswer("yes, no", ["yes", "no"])).toBe(true);
  expect(isRightAnswer("yes,yes", ["yes", "no"])).toBe(false);
  expect(isRightAnswer("yes,no,no", ["yes", "no"])).toBe(false);
});

test("Test getRightAnswerList. If get string in user answer and right answer should return true if they equal", () => {
  expect(getRightAnswerList("yes", ["yes"])).toBe("yes");
});
test("Test getRightAnswerList. If get only string return this string", () => {
  expect(getRightAnswerList("yes")).toBe("yes");
});
test("Test getRightAnswerList. If get only number return string with this number", () => {
  expect(getRightAnswerList(1)).toBe("1");
});
test("Test getRightAnswerList. If get only number array return empty string", () => {
  expect(getRightAnswerList([0, 1])).toBe("");
});
test("Test getRightAnswerList. If get first parameter number array and second string return empty string", () => {
  expect(getRightAnswerList([0, 1], "")).toBe("");
});
test(`
Test getRightAnswerList. 
If first parmeter is number and senocd is string array return: 
  * empty string if element from this number not found.
  * string if found element from this number in array
`, () => {
  expect(getRightAnswerList(0, ["yes", "no"])).toBe("yes");
});
/*
test(`
Test getRightAnswerList. 
If first parmeter is number array and senocd is string array return: 
  * empty string if element from this number not found.
  * string if found element from this number in array
`, () => {
  expect(getRightAnswerList([0], ["yes", "no"])).toBe(["yes"]);
  expect(getRightAnswerList([0, 1], ["yes", "no"])).toBe(["yes", "no"]);
  expect(getRightAnswerList([2], ["yes", "no"])).toBe([""]);
  expect(getRightAnswerList([0, 2], ["yes", "no"])).toBe(["yes", ""]);
});
*/
