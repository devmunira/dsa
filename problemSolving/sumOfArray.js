// Sum all integer elements of an array

const sumOfArray = (array = []) => {
    return array.reduce((acc,cur) => {
        if(typeof cur === 'number') acc += cur
        return acc;
    },0)
}

module.exports = {
    sumOfArray
}