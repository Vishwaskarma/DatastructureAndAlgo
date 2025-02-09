function MergeTwounsortedArr(arrOne, arrTwo) {
    function bubbleSort(arr) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }


    let a = bubbleSort(arrOne);
    let b = bubbleSort(arrTwo);

    let result = [];
    while (a.length && b.length) {
        if (a[0] < b[0]) {
            result.push(a.shift());
        } else {
            result.push(b.shift());
        }
    }
    return [...result, ...a, ...b];
}

let arr1 = [23, 1, 22, 44, 54, 67];
let arr2 = [99, 87, 2, 4];
console.log(MergeTwounsortedArr(arr1, arr2));
