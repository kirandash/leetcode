// const isPalindrome = require("./index");
const longestPalindrome = require("./best-sol");

test("'cbbd' returns 'bb'", () => {
  expect(longestPalindrome("cbbd")).toEqual("bb");
});

test("'abba' returns 'abba'", () => {
  expect(longestPalindrome("abba")).toEqual("abba");
});

test("'abacdfgdcaba' returns 'aba'", () => {
  expect(longestPalindrome("abacdfgdcaba")).toEqual("aba");
});

test("'a' returns 'a'", () => {
  expect(longestPalindrome("a")).toEqual("a");
});
