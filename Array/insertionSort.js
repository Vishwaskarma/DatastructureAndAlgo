function Insertionsort(arrIns){
    for(let i=1;i<arrIns.length;i++){
        let currentElem=arrIns[i];
        let j=i-1;
        while(j>=0 && arrIns[j]>currentElem){
            arrIns[j+1]=arrIns[j]
            j--
        }
        arrIns[j+1]=currentElem
    }
    return arrIns;

}
let arrIns=[99,12,32,45,65,77,1];

console.log(Insertionsort(arrIns));



