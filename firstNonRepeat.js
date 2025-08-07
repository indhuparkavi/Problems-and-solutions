function nonRepeat(params) {
    const map = new Map();

    // const str = params.split('');
    // str.forEach(element => {
    //     map.set(element, (map.get(element) || 0) + 1);
    // });

    for (let str of params) {
        map.set(str, (map.get(str) || 0) + 1);
    }

    for (let [k, v] of map) {
        if (v === 1) return k
    }
    return false
}

const str = "aabbcddasdfadsfczasdf"

console.log(nonRepeat(str));
