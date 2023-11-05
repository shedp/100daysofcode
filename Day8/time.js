/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
    if (seconds <= 359999) {
        let hour;
        let min;
        let sec;

        hour = String(Math.floor(seconds / 3600)).padStart(2, '0')
        min = String(Math.floor((seconds - hour * 3600) / 60)).padStart(2, '0')
        sec = String(Math.floor((seconds - hour * 3600 - min * 60))).padStart(2, '0')

        return (`${hour}:${min}:${sec}`)
    }
}

console.log(humanReadable(0));
console.log(humanReadable(59));
console.log(humanReadable(60));
console.log(humanReadable(90));
console.log(humanReadable(3599));
console.log(humanReadable(3600));
console.log(humanReadable(45296));
console.log(humanReadable(86399));
console.log(humanReadable(86400));
console.log(humanReadable(359999));