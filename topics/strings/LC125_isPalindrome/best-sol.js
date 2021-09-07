// Valid Palindrome
/* Best solution - 
  Time complexity: O(N)
  Space complexity: O(1) Left and right pointers take constant space
*/

/* Concept 
* Instead of thinking palindromes as words that read the same backwards, think of them as words where each half mirrors each other!
* The mirror concept works for words with both even and odd letters
* Ex: 
  "L O L"
  "L O V E"
* /

/* Psuedocode
* Sanitize input strings by removing non alphanumeric characters and lowercasing it
* Create a left and right pointer, initially at start and end of input string
* While left less than the right - if characters at left and right are not equal, return false
  else return true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  // Sanitize the input string
  s = s.toLowerCase().replace(/[\W_]/g, "");
  // left and right pointers initially at start and end of input string
  let left = 0;
  let right = s.length - 1;
  // While left less than the right
  while (left < right) {
    // if characters at left and right are not equal, return false
    if (s[left] !== s[right]) return false;
    // increment left pointer
    left++;
    // decrement right pointer
    right--;
  }
  // else return true
  return true;
};

module.exports = isPalindrome;
