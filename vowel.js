let str="ragel"
let vowels=0
for(let i=0;i<str.length;i++){
    console.log(str[i])
    if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
        vowels=vowels+1
    }
    
}
console.log(vowels)



/////// Same Program Using Array


let strName="ragel"
let vowelsarr=['a','e','i','o','u']
let vowelsCount = 0
for(let i=0;i<str.length;i++){
if(vowelsarr.includes(strName[i])){
    vowelsCount++
}
    
}
console.log(vowelsCount)