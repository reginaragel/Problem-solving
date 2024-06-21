fibo=(n)=>{
    let fiboseries=[0,1];
    for(let i=2;i<n;i++){
        let output=fiboseries[i-1]+fiboseries[1-2];
        fiboseries.push(output);
    }
    return fiboseries;
}

let res=fibo(7)
console.log(res)