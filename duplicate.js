const duplicate = (arr) => {
    return [...new Set(arr)]
    TC: O(n)
    SC: O(n)
}

const arr = [1, 2, 1, 2, 12, 12, 2, 1]

console.log(duplicate(arr));


