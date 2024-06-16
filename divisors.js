const findingDivisors=(num)=>{
    let count=[];
    for(let i=1;i<=num;i++){
        if(num%i===0){
            count.push(i)
            
        }
    }
    console.log(count);
}
findingDivisors(36)