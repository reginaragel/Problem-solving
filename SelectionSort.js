const selectionSort=(arr)=>{
    let n=arr.length;
    
    for( let i=0;i<n-1;i++){
        let minimum=i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minimum]){
                minimum=j
            }
        }
        let temp=arr[i]
        arr[i]=arr[minimum]
        arr[minimum]=temp
    }
    return arr
}
let arr=[13,46,24,52,20,9]
console.log(selectionSort(arr));