function Mergesort(arrOne,arrTwo){
    let result=[];
    while(arrOne.length && arrTwo.length){
        if(arrOne[0]<arrTwo[0]){
            result.push(arrOne.shift())
        }else{
            result.push(arrTwo.shift())
        }
    }
    return [...result,...arrOne,...arrTwo]

}
let arrOne=[1,2,3,4,5];
let arrTwo=[6,7,8,9,10];
// let arrOne=[3,5,1,2].sort((a,b)=>a-b);
// let arrTwo=[9,8,7,6].sort((a,b)=>a-b);
console.log(Mergesort(arrOne,arrTwo))



