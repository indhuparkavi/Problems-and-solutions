const result = [];
function flatMap(arr, callback) {


    // for (let i = 0; i < arr.length; i++) {
    //     if (Array.isArray(arr[i])) {
    //         flatMap(arr[i], callback)
    //     } else {
    //         const val = callback(arr[i])
    //         if (Array.isArray(val)) flatMap(val, item => item)
    //         else val && result.push(val)
    //     }
    // }

    for (let i = 0; i < arr.length; i++) {
        const mapped = callback(arr[i], i, arr);
        if (Array.isArray(mapped)) {
            result.push(...mapped);
        } else {
            result.push(mapped);
        }
    }
}








// const arr = [1, 2, 3, 4, 5];
// const arr = [1, 2, [3, 4, [5, 5, 5]], 6, 7];
// const arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const arr = [{ id: 1, name: "indhu", age: { age: { age: [1, 2] } } }, { id: 2 }, { id: 3, name: "indhu", age: [1, 2] }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }];

flatMap(arr, item => item.age)
console.log(result);

console.log(arr.flatMap((item) => item.age));






