//no extra space
function merge2Arr(arr1, arr2) {
    // let j = 0;
    // for (let i = 0; i < arr1.length; i++) {
    //     if (!arr2[j]) break;
    //     // if (arr1[i] > arr2[j]) {
    //     //     arr1.splice(i, 0, arr2[j]);
    //     //     i--; j++;
    //     // }


    // }

    let i = arr1.length - 1;
    let j = 0;

    while (i >= 0 && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            let temp = arr1[i];
            arr1[i] = arr2[j];
            arr2[j] = temp;
        } else break
        i--;
        j++;
    }
    console.log(arr1, arr2);

    // for (j; j < arr2.length; j++) arr1.push(arr2[j]);
    // return arr1;
}

const arr1 = [1, 34, 45, 56]
const arr2 = [1, 2, 10, 12];

console.log(merge2Arr(arr1, arr2));
