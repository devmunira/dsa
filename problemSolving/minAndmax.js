// Find the minimum and maximum number from an array
// input [1,2,8,9,6,4] => min - 1 & max - 9

const findMinAndMax = (array = []) => {
    let min = array[0]
    let max = array[0]

    for (let i = 0; i < array.length; i++) {
        // check min
        if(min > array[i]) min = array[i]
        // check max
        if(max < array[i]) max = array[i]
    }

    return {
        min,
        max
    }
}

module.exports =  {findMinAndMax};