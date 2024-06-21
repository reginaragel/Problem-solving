const printingNaturalNumbers=(i,n)=>{
    if(i>n){
        return;
    }
    else{
        console.log(i);           
        printingNaturalNumbers(i+1,n)  //////1 2 3 4 5 6 7 8 9 10 11
    }

}

printingNaturalNumbers(1,10)