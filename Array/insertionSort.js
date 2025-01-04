
function InsertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i]
        let j=i-1
       while(j>=0 && arr[j]>temp){
        arr[j+1]=arr[j]
        j--
       }
      arr[j+1]=temp
    }
    return arr

}
let arr=[10,4,6,3,2,6,8,9];
console.log(InsertionSort(arr))

