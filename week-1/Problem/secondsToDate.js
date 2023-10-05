// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    // validation Input
    if(typeof seconds !== 'number' || seconds < 0) return false;
    // Convert Sec to Hours
    const hours = Math.floor(seconds / 3600);
    // Convert Mins from Remining Sec
    const minutes = Math.floor((seconds % 3600) / 60);
    // Convert Sec
    const remainingSeconds = seconds % 60;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");


    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

console.log(humanReadable(0))
console.log(humanReadable(-1))
console.log(humanReadable(59))
console.log(humanReadable(60))
console.log(humanReadable(90))
console.log(humanReadable(86399)) 
console.log(humanReadable(359999))
