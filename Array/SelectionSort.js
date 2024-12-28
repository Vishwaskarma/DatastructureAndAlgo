const selectionSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr
}
let arr=[10,22,33,4,5,6,7,1,9,0]
console.log(selectionSort(arr))