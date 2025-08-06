function deepClone(obj) {
    if (typeof obj !== `object` || obj === null) return obj;
    let result = {};

    if (Array.isArray(obj)) {
        result = obj.map(item => deepClone(item));
        return result
    }

    for (let key in obj) {
        if (typeof obj[key] === `object`) result = { ...result, [key]: deepClone(obj[key]) };
        else result = { ...result, [key]: obj[key] }
    }
    return result;
}

const obj2 = {
    id: 1,
    name: 'indhu',
    age: null,
    address: {
        city: 34,
        country: null,
        zip: 45
    },
    set: {
        city: 34,
        country: null,
        zip: 45,
        data: {
            city: 34,
            country: null,
            zip: null
        }
    },
    arr: [
        {
            city: 34,
            country: null,
            zip: 45
        },
        {
            city: 34,
            country: null,
            zip: 44
        }
    ],
    test: 'sdfa',
    arr1: [1, 2, 3]

}

// const obj2 = [1, 2, 3]

console.log(deepClone(obj2));