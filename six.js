const rightAngleNumber=(n)=>{
    for(let i=0;i<n;i++){
        let row=''
        for(let j=n;j>i;j--){
            row+=(n-j+1+'')
        }
        console.log(row);
    }
}

rightAngleNumber(5)