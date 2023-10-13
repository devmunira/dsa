// Find the minimum and maximum number from an array
// input [1,2,8,9,6,4] => min - 1 & max - 9

const findMinAndMax = (array = []) => {
    let min = array[0]
    let max = array[0]

    console.time('Custom')

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



// Find Max String Occur Char
const maxStringChar = (string) => {
    const obj = {}
    // get count for each char
    for (const char of string.toLowerCase()) {
        obj[char] = (obj[char] || 0) + 1
    }
    
    const sortedArray = Object.keys(obj).sort((a,b) => {
        obj[b] - obj[a]
    })

    console.log(sortedArray)
    // 
    return obj

}

module.exports =  {findMinAndMax,maxStringChar};