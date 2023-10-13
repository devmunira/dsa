// Input - car race => true
// Input - apple => eppla

// Palindrom
const palindrom = (string = '') => {
    let str = ''
    string = string.toLowerCase().replace(/[\W_\s]/g, '');
    for (const char of string) {
       str = char + str
    }
    return str == string
}

module.exports = {
    palindrom
}