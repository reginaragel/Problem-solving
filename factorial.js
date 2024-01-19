fibonacci=(n)=>{
    if(n<=1){
        return n
    }
    else
    {
        return fibonacci(n-1)+fibonacci(n-2);
    }
    
}

const res=fibonaaci(7)
console.log("the fibonacci series is :",res)