function rotateByLen(arr, len) {
    const result = [];
    let n = 0
    let count = 0;
    for (let k = len - 1; k >= 0; k--) {
        result.push(arr[n + k]);
        if (k === 0) {
            count++;
            k = len;
            n = len * count
            if ((n + len) > arr.length) {
                k = len - ((n + len) - arr.length)
            }
        }
        if (result.length === arr.length) break
    }

    return result
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
const k = 4;
console.log(rotateByLen(arr, k));

// 0, 1, 2, 3, 4, 5, 6, 7

// count = 0;
// n = 0
// k = len - 1
// k = 2

// arr[n + k] -> 2 + 0, 1 + 0, 0 + 0;

// if (k === 0)
//     k = len - 1
// count++
// n = len * count

// arr[n + k] -> 3 + 2, 3 + 1, 3 + 0

// n = 6 > arr.length ? k = (3 - 9 - 8 - 1) n = 9











