function compareObject(obj1, obj2) {

    if (obj1 === obj2) return true;

    if (typeof obj1 !== `object` || typeof obj2 !== `object` || obj1 === null || obj2 === null) {
        return false;
    }

    const arr1 = Array.isArray(obj1);
    const arr2 = Array.isArray(obj2);

    if (arr1 && arr2) {
        if (obj1.length !== obj2.length) return false;
        for (let i of obj1) {
            if (!compareObject(obj1[i], obj2[i])) return false
        }
    } else if (arr1 || arr2) return false;

    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (let key in obj1) {
        if (!compareObject(obj1[key], obj2[key])) return false;
    }
    return true;
}


// const obj1 = {
//     id: 1,
//     name: 'indhu',
//     age: null,
//     address: {
//         city: 34,
//         country: null,
//         zip: 45
//     },
//     set: {
//         city: 34,
//         country: null,
//         zip: 45,
//         data: {
//             city: 34,
//             country: null,
//             zip: null
//         }
//     },
//     test: 'sdfa',
//     arr: [
//         {
//             city: 34,
//             country: null,
//             zip: 45
//         },
//         {
//             city: 34,
//             country: null,
//             zip: 34
//         }
//     ]
// }
// const obj2 = {
//     id: 1,
//     name: 'indhu',
//     age: null,
//     address: {
//         city: 34,
//         country: null,
//         zip: 45
//     },
//     set: {
//         city: 34,
//         country: null,
//         zip: 45,
//         data: {
//             city: 34,
//             country: null,
//             zip: null
//         }
//     },
//     arr: [
//         {
//             city: 34,
//             country: null,
//             zip: 45
//         },
//         {
//             city: 34,
//             country: null,
//             zip: 44
//         }
//     ],
//     test: 'sdfa',

// }

const obj1 = [2, 4, 5, [5, 6]]
const obj2 = [2, 4, 5, [5, 6]]
console.log(compareObject(obj1, obj2));
