function bubbleSortingTwo(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
               [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }

    return arr;
}
let arr=[10,3,2,4,5,6,67,9]
console.log(bubbleSortingTwo(arr))