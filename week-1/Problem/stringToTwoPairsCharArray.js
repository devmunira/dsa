/**
 * Problem 1 - Split a string into pairs of two characters. If the string has an odd number
 * of characters, replace the missing second character of the final pair with an underscore ('_').
 */

/**
 * Problem Solving Approach:
 * 1. Describe the problem in your own words.
 * 2. Analyze the Input & Output.
 * 3. Think about input validation.
 * 4. Apply a brute-force approach.
 * 5. Break down the problem into smaller tasks and write pseudocode.
 * 6. Finally, start coding and labeling must be meaningFul.
 * 7. Consider Time & Space Complexity.
 */

/**
 * Input & Output Example:
 * - 'abc' => ['ab', 'c_']
 * - 'abcdef' => ['ab', 'cd', 'ef']
 */

/**
 * Function to split a string into pairs of two characters.
 * @param {string} string - The input string to be split.
 * @returns {string[]} - An array containing pairs of characters.
 */
function splitStringIntoPairs(string) {
  // Validate the input
  if (typeof string !== 'string') return [];

  const pairArray = []; // Space complexity: O(n)
  
  // Time Complexity: O(n)
  for (let index = 0; index < string.length; index += 2) {
    pairArray.push(`${string[index]}${string[index + 1] || '_'}`);
  }

  return pairArray;
}

// Test Cases
console.log(splitStringIntoPairs('abc')); // Output: ['ab', 'c_']
console.log(splitStringIntoPairs('')); // Output: []
console.log(splitStringIntoPairs('abcdefga')); // Output: ['ab', 'cd', 'ef', 'ga']
