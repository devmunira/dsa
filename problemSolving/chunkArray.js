// Input - [1,2,3,4,5,6,7] , 2 => [[1,2], [3,4] , [5,6] , [7]]

const chunkArray = (array,n) => {
    const chunk = []

    for (let i = 0; i < array.length; i = i + n) {
        if(array[i+1] !== undefined){
            chunk.push([array[i] , array[i+1]])
        }else{
            chunk.push([array[i]]) 
        }
    }

    return chunk
}

module.exports = {
    chunkArray
}