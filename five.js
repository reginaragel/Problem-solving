const rightinverted=(n)=>{
    for(let i=0;i<n;i++){
        let row=''
        for(let j=n;j>i;j--){
            row+=('*')
        }
        console.log(row);
    }
}
rightinverted(5)