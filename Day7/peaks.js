/* Write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array arr = [0, 1, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

The output will be returned as an object with two properties: position and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: pickPeaks([3, 3, 6, 4, 1, 3, 1, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! [1, 1] has a peak while [1, 3] and [1] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)
*/

const pickPeaks = (arr) => {
    let numArray = convertArray(arr).number
    let iArray = convertArray(arr).index
    let result = { pos: [], peaks: [] }

    if (arr.length > 3) {
        for (let i = 1; i < numArray.length - 1; i++) {
            if (numArray[i] > numArray[i - 1] && numArray[i] > numArray[i + 1]) {
                result.peaks.push(numArray[i])
                result.pos.push(iArray[i])
            }
        }
    }
    return result
}


const convertArray = (arr) => {
    let newObject = {
        index: [],
        number: []
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            newObject.index.push(i);
            newObject.number.push(arr[i]);
        }
    }
    return newObject
}