// find the n - th frequent string charecters from an String
// input - asskjfsdj , n - 3

const findString = (string , n) => {
// const findString = (string, n) => {
    const charCount = {};
  
    // Count the occurrences of each character in the string
    for (const char of string) {
      charCount[char] = (charCount[char] || 0) + 1;
    }

    console.log(charCount)
  
    // Sort characters by count in descending order
    const sortedChars = Object.keys(charCount).sort(
      (a, b) => charCount[b] - charCount[a]
    );
  
    // Check if there are enough characters for the nth most frequent
    if (n > sortedChars.length) {
      return "Not enough unique characters in the string.";
    }

    console.log(sortedChars)
  
    // Return the nth most frequent character
    return sortedChars[n - 1];
}

module.exports = {findString}