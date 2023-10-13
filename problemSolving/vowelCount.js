// Vowel Counts from an String

const vowelCount = (string = '') => {

    const vowels = ['a' , 'e' , 'i' , 'o' , 'u'];
    let count = 0;

    for (const char of string) {
        for (const vowel of vowels) {
            if(char == vowel || char == vowel.toUpperCase()) count++
        }
    }
    return count;
}

module.exports = {
    vowelCount
}