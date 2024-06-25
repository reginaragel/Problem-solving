/////SubArray with a given sum

const findingSubArray=(arr,N=5,S=12)=>{
    let flag=0;
    let start=0;
    let sum=0;
    let n=arr.length;
    for(let i=0;i<n;i++){
        sum=sum+arr[i]
        while (sum>S) {
            sum=sum-arr[start]
            start++
            
        }
        if(sum==S){
            console.log(start+1,' ',i+1);
            flag=1;
            break;
        }
    }
}