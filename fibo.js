const fibonacciNumber=(number)=>{
    if(number<=1){
        return number;
    }
    else{
        return fibonacciNumber(number-1)+fibonacciNumber(number-2)
    }

}

console.log(fibonacciNumber(6));  ///0 1 1 2 3 5 [8] 