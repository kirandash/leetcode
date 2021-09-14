// Given a string s, find the longest palindromic substring in s
// longestPalindrome("cbbd") ---> "bb"
// longestPalindrome("abba") ---> "abba"
// longestPalindrome("a") ---> "a"

/* Best solution - 
  Time complexity: O(N^2): Since expanding a palindrome around it's center could take upto O(n), and we do this for each character
  Space complexity: O(1)
*/

// Concept: Expand around Middle to solve the problem
// For odd lettered words, we will treat each character as center
// For even elttered words ex: abba we will have to treat the space b/w two characters as center
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let startIndex = 0;
  let maxLength = 1; // All subStrings of length 1 are palindromes

  /**
   * helper fn
   * @param {number} leftIdx
   * @param {number} rightIdx
   * @return {number}
   */
  function expandAroundMiddle(leftIdx, rightIdx) {
    while (leftIdx >= 0 && rightIdx < s.length && s[leftIdx] === s[rightIdx]) {
      const currentPalLength = rightIdx - leftIdx + 1; // + 1 because str lengths are indexed from 1
      if (currentPalLength > maxLength) {
        // update maxLength
        maxLength = currentPalLength;
        startIndex = leftIdx;
      }
      // Move pointers - leftIdx to further leftIdx and rightIdx to further rightIdx
      leftIdx--;
      rightIdx++;
    }
  }

  for (i = 0; i < s.length; i++) {
    expandAroundMiddle(i - 1, i + 1); // for odd lettered words, each letter is center
    expandAroundMiddle(i, i + 1); // for even lettered words, space b/w letters is center
  }

  return s.slice(startIndex, startIndex + maxLength);
};

module.exports = longestPalindrome;
