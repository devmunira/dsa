// Print integers one-to-N, but print “Fizz” if an integer is divisible by three, 
// “Buzz” if an integer is divisible by five, 
// and “FizzBuzz” if an integer is divisible by both three and five.


// Time Complexity Big O(n)
const fizzBuzz = (length) => {
    if(typeof length !== 'number') return false;
    for (let i = 1; i <= length; i++) {
       let output = '';
       if( i % 3 === 0) output += 'Fizz'
       if( i % 5 === 0) output += 'Buzz'
       console.log(output || i)
    }
}





module.exports = {
    fizzBuzz
}
