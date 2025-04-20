 const slidingWindow=(arr,k)=>{
    let current=0;
    for(let i=0;i<k;i++){
        current=current+=arr[i]
    }
    let maxx=current;
    for(let j=0;j<arr.length-1;j++){
        if(j>0){
            current -=arr[j-1]
            current +=arr[j+k-1]
        }
        maxx=Math.max(maxx,current)
     
    }
    return maxx;

 }
 let arr=[100,200,300,400]
 let k=2
 console.log(slidingWindow(arr,k))


