const findingGcd=(a,b)=>{
    while(b!=0){
        let digit=b;
        b=a%b;
        a=digit
    }
    console.log(a)
}
findingGcd(48,18)