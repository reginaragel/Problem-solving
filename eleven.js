const checkingPalindrom=(num)=>{
    let rev=0;
    let dup=num
    while(num!=0){
        let digit=num%10;
        rev=rev*10+digit;
        num=Math.floor(num/10)
    }
    if(dup==rev){
        console.log('It is a palindrome');
    }
    else{
        console.log('It is not a palindrome');
    }
}
checkingPalindrom(121)