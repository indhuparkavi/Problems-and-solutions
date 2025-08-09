


// // User function Template for javascript
// /**
//  * @param {number[][]} matrix
//  * @param {number} R
//  * @param {number} C
//  * @returns {number}
//  */

// class Solution {
//     // Function to find median of the matrix.
//     median(arr, target) {
//         let ans = []
//         const recursion = (i, sum) => {
//             ans.push(sum);
//             if (i >= arr.length) return;
//             for (let j = i; j < arr.length; j++) {
//                 recursion(j + 1, sum + arr[j])
//             }
//         }
//         recursion(0, 0);
//         return ans
//     }
// }

// console.log(new Solution().median([1, 2, 1], 119))



let arr = [1, 2, 3, -13, 5, 6];
var num = 500;
console.log(test())
const test1 = () => { num }
function test() {
    console.log(num);
    // var d = 100;
}

test();
const a = test1();
console.log(a);
