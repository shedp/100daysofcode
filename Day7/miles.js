/*
Write the function that parses the mileage number input, and returns a 2 if the number is "interesting, a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

"Interesting" Numbers
Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

Any digit followed by all zeros: 100, 90000
Every digit is the same number: 1111
The digits are sequential, incementing†: 1234
The digits are sequential, decrementing‡: 4321
The digits are a palindrome: 1221 or 73837
The digits match one of the values in the awesomePhrases array
† For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

A number is only interesting if it is greater than 99!
Input will always be an integer greater than 0, and less than 1,000,000,000.
The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
You should only ever output 0, 1, or 2.
*/

function isInteresting(number, awesomePhrases) {

    if (checkCondition(number, awesomePhrases)) {
        return 2
    } else if (checkCondition(number + 1, awesomePhrases)) {
        return 1
    } else if (checkCondition(number + 2, awesomePhrases)) {
        return 1
    }
    return 0
}

function checkCondition(number, array) {
    if (number > 99 && (number % 100 === 0 || sameDigits(number) || ascendingOrder(number) || descendingOrder(number) || palindrome(number) || array.includes(number))) {
        return true
    }
}

function sameDigits(number) {
    const numString = number.toString();
    for (let i = 1; i < numString.length; i++) {
        if (numString[i] !== numString[0]) {
            return false;
        }
    }
    return true;
}

function ascendingOrder(number) {
    const numString = number.toString();
    for (let i = 0; i < numString.length - 1; i++) {
        let current = parseInt(numString[i])
        let next = parseInt(numString[i + 1])

        if (current === 9 && next === 0) {
            continue
        }
        if (current !== next - 1) {
            return false
        }
    }
    return true
}

function descendingOrder(number) {
    const numString = number.toString();
    for (let i = 0; i < numString.length - 1; i++) {
        let current = parseInt(numString[i])
        let next = parseInt(numString[i + 1])

        if (current === 0 && next === 1) {
            continue
        }
        if (current !== next + 1) {
            return false
        }
    }
    return true
}

function palindrome(number) {
    const numString = number.toString();
    const reverseString = numString.split('').reverse().join('')
    return numString === reverseString;
}

console.log(isInteresting(3, [1337, 256]))
console.log(isInteresting(1336, [1337, 256]))
console.log(isInteresting(1337, [1337, 256]))
console.log(isInteresting(11208, [1337, 256]))
console.log(isInteresting(11209, [1337, 256]))
console.log(isInteresting(11211, [1337, 256]))
console.log(isInteresting(7540, [1337, 7542]))