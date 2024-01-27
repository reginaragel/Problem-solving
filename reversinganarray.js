reversingarray=(arr)=>{
    let start=0
    let end=arr.length-1
    while(start<end){
        let temp=arr[start]
        arr[start]=arr[end]
        arr[end]=temp
        start++;
        end--;
    }
}
let myarray=[1,4,6,7,3]
reversingarray(myarray)
console.log(myarray)