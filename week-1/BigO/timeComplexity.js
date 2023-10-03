/***
 * Time Complexity refers to the amount of time required for a program to run, based on the size of its input.
 * There are three main types of Time Complexity:
 * 1 - Worst Time Complexity (Big O notation)
 * 2 - Average Time Complexity (Theta notation)
 * 3 - Best Time Complexity (Omega notation)
 * Typically, we focus on measuring the worst-case complexity of a program.
 * When measuring Big O notation, we adhere to two key principles:
 * 1 - Remove Constants: We disregard constant factors to focus on the dominant term.
 * 2 - Consider Worst Case: We analyze the performance under the worst-case scenario.
 * There are various types of Big O cases, including:
 * 1 - Constant Time Complexity, denoted as O(1), which represents the best-case scenario.
 * 2 - Linear Time Complexity, expressed as O(n), where the runtime scales linearly with input size.
 * 3 - Divide and Conquer Time Complexity, represented as O(log n), often seen in efficient algorithms.
 * 4 - Quadratic Time Complexity, denoted as O(n^2), indicating a quadratic growth in runtime.
 * 5 - Cubic Time Complexity, expressed as O(n^3), signifying cubic growth in execution time.
 */


// Worst-Case Time Complexity Analysis

// Constant Time Complexity
/**
 * O(1) is the best time complexity for a program; its runtime does not increase based on input size.
 * Regardless of the input size, it will execute in the same amount of time for all cases.
 * - Problem 1: Given an array of integers, find the value at a specific index (e.g., index 2).
 * - Problem 2: Addition of two numbers, regardless of their size.
 */

// Problem 1 - Accessing an Element in an Array
const arrayOfIntegers = [1, 2, 3, 4, 5];
console.log(arrayOfIntegers[2]); // O(1) [No matter if it's finding the last or first index of an array and regardless of the array's size]

// Problem 2 - Adding Two Numbers
function addition(num1, num2) {
    return num1 + num2; // O(1) [No matter how large num1 and num2 are; it takes the same time to add 10 + 10 or 10M + 10M]
}

/**
 * Linear Time Complexity
 * O(n) increases linearly with input size.
 * Problem 1 - Sum of all elements in an array.
 */

// Problem 1 - Sum of All Elements in an Array
function additionOfArray(array) {
    const sum = array.reduce((acc, cur) => {
        acc += cur; // The program iterates through the array length times, and its time grows linearly.
        return acc;
    }, 0);
    return sum;
}

console.log(additionOfArray(arrayOfIntegers));




/**
 * O(n^2) - Quadric Time Complexity [Increare time 2x of Input Size if input size is 4 time complexity will be 2*2 = 4]
 * Problem: Sort an array of integers using the Sort algorithm.
*/

// Problem - 1

let unSortedArray = [85,26,45,95,75,25,10]

for (let index = 0; index < unSortedArray.length; index++) {
    for (let j = 0; j < unSortedArray.length - index - 1; j++) { // programe exicute 2X times of input size
        if (unSortedArray[j] > unSortedArray[j + 1]) {
            const temp = unSortedArray[j];
            unSortedArray[j] = unSortedArray[j + 1];
            unSortedArray[j + 1] = temp;
        }
   } 
} 

console.log(unSortedArray)

/**
 * O(log n) - Divide & Conqure time complexity
 * Programe will exicute n/2^n times
 * In this case if find an item it will exicute half time which is O(log n) and if not found O(1)
 * so, we take worse case complexity of O(log n)
 */

let arrayOfString = [1,2,3,4,5,6,7,8,9,10]

function binarySearch(array , target) {
   let left = 0;
   let right = array.length - 1; 
   let count = 0;
   while(left <= right){
        count++
        let mid = Math.ceil(left + (right - left) / 2)
        if(array[mid] === target) {
            console.log(`Traverse ${count} times which is half of input size`)
            return `${array[mid]} is in ${mid} index`
        }else if(array[mid] < target){
            left = mid + 1
        }else{
            right = mid - 1
        }
        console.log(`Traverse ${count} times which constant time`)
        return -1
   }
}

console.log(binarySearch(arrayOfString , 15))


