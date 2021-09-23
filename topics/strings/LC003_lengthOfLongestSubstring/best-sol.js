// Given a string s, find the length of the longest substring without repeating characters.
// lengthOfLongestSubstring("abcabcbb") ---> 3

/* Best solution - 
  Time complexity: O(n) Each character of the string needs to be visited once
  Space complexity: O(min(m, n)) The number of keys in hash map is bounded by the size of the string n and the size of the charset/alphabet m.

  Concept: 
  - We can solve this using the "Sliding Window" approach
  - The sliding window will represent the current substring of non repeating characters we are on.
  - We will NOT be working with Sliding Window of fixed size, the window will grow or shrink in size as we iterate thru string
  - Current index and value in for loop will ALWAYS BE END of the sliding window. As end of window increases, we conditionally increase start of window.
*/

/*
Psuedocode - 
- Create an empty hashMap(key/val ---> character/index)
- Create start and max variable, set both with initial values of zero

- Loop through input string
  - If current character in hashmap and has index >= start
    - Set start to index for character found in hashmap + 1
  - Set key/value pair on hashmap to be current character/current index
  - If length of current window is greater than max
    - Set max to length of current window

- return max
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // Create an empty hashMap(key/val ---> character/index)
  let winddowCharsMap = {};
  // Create start and max variable, set both with initial values of zero
  let windowStart = 0;
  let maxLength = 0;

  // Loop through input string
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];

    // If current character in hashmap and has index >= start
    if (winddowCharsMap[currChar] >= windowStart) {
      // Set start to index for character found in hashmap + 1
      windowStart = winddowCharsMap[currChar] + 1;
    }

    // Set key/value pair on hashmap to be current character/current index
    winddowCharsMap[currChar] = i;

    // If length of current window is greater than max, Set max to length of current window
    maxLength = Math.max(maxLength, i - windowStart + 1);
  }

  // return max
  return maxLength;
};

module.exports = lengthOfLongestSubstring;
