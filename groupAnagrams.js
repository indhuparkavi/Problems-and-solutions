function groupAnagrams(arr) {
    const map = new Map();

    // arr.forEach(element => {
    //     let temp = element.split('').sort().join('');

    //     const val = map.get(temp);

    //     if (val) { val.push(element); map.set(temp, val); }
    //     else map.set(temp, [element])
    // });

    for (let word of arr) {
        const count = new Array(26).fill(0);
        for (let ch of word) {
            count[ch.charCodeAt(0) - 97]++;
        }
        console.log(count);

        const key = count.join('#'); // unique key per anagram group
        console.log(key);

        if (!map.has(key)) map.set(key, []);
        map.get(key).push(word);
    }

    return [...map.values()]
}

const arr = ['estt', 'cat', 'tac', 'act', 'test',]

console.log(groupAnagrams(arr));

// 1. sort -> key = sort -> value[arr]
