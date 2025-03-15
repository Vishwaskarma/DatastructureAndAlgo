
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}


function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}

console.log("Sum of array [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5]));