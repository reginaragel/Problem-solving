linearsearch=(arr,target)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
       
    }
    return -1
}
const arrtosearch=[1,4,6,8,9,3,2,0]
const targetValue=8
const res=linearsearch(arrtosearch,targetValue)
if(res!==-1)
console.log(`Target ${targetValue} found at index ${res}.`)
else
console.log(`Target ${targetValue} not found in the array.`)