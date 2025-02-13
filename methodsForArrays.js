function mySlice(arr, start = 0, end = arr.length) {
    const result = [];
    if (start < 0) start = Math.max(0, arr.length + start);
    if (end < 0) end = Math.max(0, arr.length + end);

    for (let i = start; i < end && i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
}

function myIndexOf(arr, item, from = 0) {
    if (from < 0) from = Math.max(0, arr.length + from);

    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

function myIncludes(arr, item, from = 0) {
    if (from < 0) from = Math.max(0, arr.length + from);

    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

const array = [1, 2, 3, 4, 5];

console.log(mySlice(array, 1, 4));
console.log(myIndexOf(array, 3));
console.log(myIncludes(array, 4));
