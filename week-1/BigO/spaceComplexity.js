/**
- Space complexity refers to the amount of computer memory (space) required by a program to execute and manage its data structures. The space complexity can vary depending on the size of the program's input data.
To assess space complexity, we consider both the size of variables and the output.
If a variable is primitive, such as boolean, null, undefined, or numbers, the space complexity is O(1).
If the data is non-primitive, like an array, object, stack, or list, the space complexity becomes O(n).
*/

// O(1) Space Compexity
function sumUpToN(N) {
    let sum = 0; // This variable 'sum' takes O(1) space
    for (let i = 1; i <= N; i++) {
      sum += i;
    }
    return sum;
}
  

// O(n) Space Compexity
function reverseArray(arr) {
    const n = arr.length;     // Takes O(1) space to store 'n'
    const reversed = [];      // Takes O(n) space to store the reversed array
  
    for (let i = n - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
  
    return reversed;
}
  