const bubbleSort=(arr)=>{
    let n=arr.length;
    for(let i=n-1;i>=1;i--){
        for(let j=0;j<n;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=temp
            }
        }
        
    }
    return arr
}
let arr=[2,5,4,3,1]
console.log(bubbleSort(arr));