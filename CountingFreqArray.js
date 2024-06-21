const countingFrequencyOfArray=()=>{
    let arr=[1,2,4,1,2,5,6,4]
    let frequency={}
    for( let i=0;i<arr.length;i++){
        let number=arr[i]                            //arrlength=8
        if(frequency[number]){                  //[1,2,4,1,2,5,6,4]
            frequency[number]+=1                //[0,1,2,3,4,5,6,7]
        }
        else{
            frequency[number]=1
        }
      
    }
    console.log(frequency);

}
countingFrequencyOfArray()
