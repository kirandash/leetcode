// Given a string s, find the length of the longest substring without repeating characters.
// lengthOfLongestSubstring("abcabcbb") ---> 3

// Basic solution with O(n^3) complexity
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // Initialise a set to store the longest string in
  let longestSubstringLength = 0;

  // Loop through the provided string
  for (i = 0; i < s.length; i++) {
    // Initialise a set to store the string created from the current point
    let substring = new Set();

    // Loop through the letters from the current point
    for (j = i; j < s.length; j++) {
      // Check if the current letter exists in the current Set
      if (substring.has(s[j])) {
        // Move on from the current letter without adding it (as it already exists in the set)
        break;
      } else {
        // Character not found, add it to the set
        substring.add(s[j]);
      }
    }

    // Update the longest string length (if this one was bigger)
    longestSubstringLength = Math.max(longestSubstringLength, substring.size);
  }
  return longestSubstringLength;
};

module.exports = lengthOfLongestSubstring;
