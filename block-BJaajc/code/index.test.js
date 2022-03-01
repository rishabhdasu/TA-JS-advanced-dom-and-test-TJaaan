const { fullName, isPalindrome, getCircumfrence, getArea } = require("./index");

test(`test for fullName`, () => {
  expect(fullName("Sam", "Johnson")).toBe("Sam Johnson");
  expect(fullName("Sam", "Johnson")).not.toBe("Martin Johnson");
});
test(`test for isPalindrome`, () => {
  expect(isPalindrome("wow")).toBe(true);
  expect(isPalindrome("wow")).not.toBe(false);
});
test(`test for getCircumfrence`, () => {
  expect(getCircumfrence(4)).toBe(25);
  expect(getCircumfrence(4)).not.toBe(28);
});
test(`test for getArea`, () => {
  expect(getArea(4)).toBe(50);
  expect(getArea(4)).not.toBe(124);
});
