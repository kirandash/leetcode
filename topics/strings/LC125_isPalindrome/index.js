// Valid Palindrome
// Naive Solution - with O(N) Complexity

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  // considering only alphanumeric characters: replace all special characters
  s = s.replace(/[^a-zA-Z]/g, "");
  // ignoring cases: convert string to lowercase
  s = s.toLowerCase();
  // check if palindrome: reverse string is same as string
  // O(N) Complexity
  return s === s.split("").reverse().join("");
};

module.exports = isPalindrome;
