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


function bubbleSortTwo(ar){
    for(let i=0;i<ar.length;i++){
        for(let j=0;j<ar.length-i-1;j++){
            if(ar[j]>ar[j+1]){
                [ar[j],ar[j+1]]=[ar[j+1],ar[j]]
            }
        }
    }
    return ar
}
let ar=[8,2,1,4,6,7,4,3]
console.log(bubbleSortTwo(ar))