// Array Efficiency in Time Complexity

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Get Specific Array Value by Index - Big O(1)
console.log(array[7]); // Accessing any index always runs in O(1) time complexity.

// Remove the Last Item from an Array - O(1)
array.pop(); // Removes the last item in O(1) time complexity.

// Add One Item at the End of the Array - O(1)
array.push(10); // Adds an item to the end in O(1) time complexity.

// Add One Item at the Beginning of the Array - O(n)
array.unshift(0); // Modifies all item indices, so it runs in O(n) time complexity.

// Remove One Item from the Beginning of the Array - O(n)
array.shift(); // Modifies all item indices, running in O(n) time complexity.

// Searching & Filtering - O(n)
array.filter((item) => item); // Filtering requires inspecting each item, resulting in O(n) time complexity.

// Built-In Methods like forEach, map, every, some, filter, reduce - O(n)


/*==============when should i use array========
===============================================**/

// Sequential Access is Required

// You Need Numerical Indices

// You Want a Simple List

// You Need Push and Pop Operations