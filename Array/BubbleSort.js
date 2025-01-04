function sortingBubbleSort(arrTwo){
    n=arrTwo.length
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(arrTwo[j]>arrTwo[j+1]){
                [arrTwo[j],arrTwo[j+1]]=[arrTwo[j+1],arrTwo[j]]
            }
        }
    }
    return arrTwo
}
let arrTwo=[10,4,6,3,2,6,8,9];
console.log(sortingBubbleSort(arrTwo))