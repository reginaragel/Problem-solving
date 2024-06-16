const findingArmstrong=(num)=>{
    let k=String(num).length
    let dup=num;
    let sum=0
    while(num>0){
        let digit=num%10
        sum+=Math.pow(digit,k);
        num=Math.floor(num/10)
    }
    if(dup==sum){
        console.log(`It is an armstrong number ${sum}`);
    }
    else{
        console.log(`it is not an armstrong number`);
    }
}
findingArmstrong(371)