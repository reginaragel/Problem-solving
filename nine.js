const countingNNumbers=(num)=>{
    let count=0;
    while(num>0){
        count=count+1;
        num=Math.floor(num/10)
    }
    console.log(count);
}

countingNNumbers(123)