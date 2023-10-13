// Sum Zero
// @description Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist


//  * @example input [-3, -2, -1, 0, 1, 2, 3] output [−3,3]
//  * @example input [-2, 0, 2, 3] output [-2, 2]
//  * @example input [1, 2, 3] output undefined (edited) 


/**
 * Step - 1 Defiend Return Array
 * Step - 2 Apply Two Pointer Alogotithm (First & Last Pair)
 * Step - 3 Sum Firts & Last Val & Check If 0 then push on Array and Return
 * Step - 4 If Not Exits Return Undefiend
 */


function sumZero(arrayOfInteger = []) {

    let left = 0;
    let right = arrayOfInteger.length - 1;


    while (left < right) {
        const sum = arrayOfInteger[left] + arrayOfInteger[right];
        let mid = left + (arrayOfInteger[left] + arrayOfInteger[right] / 2);

        console.log(mid)

        if(sum === 0){
            return [arrayOfInteger[left] , arrayOfInteger[right]]
        }
        if(sum > 0){
            right--

        }else{
            left++
        }
    }

    return undefined
    
}


// console.log('Result' , sumZero([-4, -2, -1, 0, 1, 2, 3]))
// console.log('Result' , sumZero([-2, 0, 2, 3]))
// console.log('Result' , sumZero([-2, -3, 0, 2])) 
// console.log('Result' , sumZero([2,0,2,0,3]))
console.log('Result' , sumZero([-2,-1,1,0,3]))


