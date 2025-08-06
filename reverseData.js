function reverse() {
    const arr = [1, 2, 3, 4, 5];

    for (let i = 0; i < arr.length / 2; i++) {
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }
    console.log(arr);

    return arr
}

/**
 * Reverses the order of elements in an array
 * @returns {number[]} arr in reverse order
 */
function reverseStr() {
    const arr = `[1, 2, 3, 4, 5]`;

    let result = '';

    for (let i = arr.length - 1; i >= 0; i--) {
        result += arr[i];
    }

    console.log(result);

}

reverse();
reverseStr();