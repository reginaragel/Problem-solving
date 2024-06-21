const printingNumbersReverse=(n)=>{
    if(n<1){
        return;
    }
        console.log(n);
        printingNumbersReverse(n-1)
   
}
printingNumbersReverse(6)