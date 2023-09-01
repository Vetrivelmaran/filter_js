const a=[1,2,3,4,5,6,7,8,9,10]
even=a.filter(e=>
    {
        if(e%2==0){
            return e
        }
    });
console.log(even)