oddeven=(nums)=>{
    if (nums%2==0){
        return "even"
    }
    else{
      return "odd"
    }

}
const res=oddeven(3);
console.log("The result is",res)