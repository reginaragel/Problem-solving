const reversedArray=(arr)=>{
    let left=0
    let right=arr.length-1;
    while(left<right){
        [arr[right],arr[left]]=[arr[left],arr[right]];
        left++                                  //5-3=2th pos///5-4=1///5-5=0 pos
        right--
    }                                    //indices[0,1,2,3,4]///length=5-1=4 th position//5-2=3 th position
    return arr                                 ///[1,2,3,4,5]
}
const array=[1,2,3,4,5]                          ///ans=p[5,4,3,2,1]
console.log(reversedArray(array));