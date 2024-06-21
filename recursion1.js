const printingNameMultipleTimes=(i,name,times)=>{
    if(i>times){
        return;
    }else{
       console.log(name)
       printingNameMultipleTimes(i+1,name,times);
       
    }
}
printingNameMultipleTimes(1,'regina',4)