const arr=[5,6,8,3]



smallerNumberInArray = (...args) => {
    let res=0
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
                {
                    res=arr[j]
                }
                
        }
       
    }
    console.log(res)
}


greaterNumberInArray = (...args) => {
    let res=0
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<arr.length;j++)
        {
            if(arr[i]<arr[j])
                {
                    res=arr[j]
                }
                
        }
       
    }
    console.log(res)
}
greaterNumberInArray(arr)

smallerNumberInArray(arr)