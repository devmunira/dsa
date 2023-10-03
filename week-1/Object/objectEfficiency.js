// Object Efficiency in Time Complexity

const object = {
    name : "Munira",
    age  : 25
}

// Get Specific Object Value by Key - Big O(1)
console.log(object.name); // Accessing any Key always runs in O(1) time complexity.

// Remove Item from an Object - O(1)
delete object.age // Removes item in O(1) time complexity.

// Add One Item at the End of the Object - O(1)
object.profession = "Developer"; // Adds an item to the end in O(1) time complexity.

// Add One Item at the Beginning of the Object - O(1)
object.address = "Dhaka";// Modifies all item indices, so it runs in O(n) time complexity.

// Remove One Item from the Beginning of the Object - O(1)
delete object.address // Modifies all item indices, running in O(n) time complexity.

// Searching & Filtering - O(n)
for(let val of Object){
    // Filtering requires inspecting each item, resulting in O(n) time complexity.
    console.log(val)
} 
    

// Built-In Methods like values, keys - O(n)


/*==============when should i use Object========
===============================================**/

// Key-Value Associations are Needed

// Data is Unordered

// You Need Fast Key-Based Access
