const pyramidTriReverse=(n)=>{
    for(let i=0;i<n;i++){
        let row=''
        for(let j=0;j<i;j++){
            row+=' '
        }
        for(let j=0;j<2*(n-i)-1;j++){
            row+=('*')
        }
        console.log(row);
        
    }
}



pyramidTriReverse(5)