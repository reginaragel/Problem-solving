let str="f8y8wy8hw"
var rev=''
for(let i=str.length-1;i>=0;i--){
    rev=rev+str[i]
}

console.log
if(rev==str){
    console.log(" it  is a palindrome",rev,str + " ni enga amma ")
}
else{
    console.log("it is not a palindrome",rev,str)
}