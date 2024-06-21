const findingHighestFrequency=(arr)=>{
    let frequency={}
    for(let i=0;i<arr.length;i++){
        let number=arr[i]
        if(frequency[number]){
            frequency[number]+=1
        }
        else{
            frequency[number]=number
        }
    }
    let highestFreq=0
    let highFreqElement;
    let lowestFreq=Infinity;
    let lowestFreqElement;

    for(let number in frequency){
        if(frequency[number]>highestFreq){
            highestFreq=frequency[number]
            highFreqElement=number
        }
        if(frequency[number]<lowestFreq){
            lowestFreq=frequency[number]
            lowestFreqElement=number
        }
    }
    console.log('highest frequency element',highestFreq);
    console.log('lowest frequency element',lowestFreq);
}
let arr=[1,45,67,13,2,0,6,8]
findingHighestFrequency(arr);