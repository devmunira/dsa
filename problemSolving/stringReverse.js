// String Reverse 
// input - apple => elppa

const stringReverse = (string) => {
   let res = ''
   for(let char of string){
      res = char + res
   }
   return res
}

const numberReverse = (number) => {
    const array = number.toString().split('')
    let res = ''
    for (let i = 0; i < array.length; i++) {
        if(array[i] == '-'){
            res = array[i]+array[i+1] + res;
            i = i + 1
        }else{
            res = array[i] + res
        }
    }

    return res
 }


module.exports = {stringReverse,numberReverse}