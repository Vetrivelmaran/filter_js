const firstNames = ['Alice', 'Bob', 'Charlie', 'David', 'Emily'];
len=5
l=firstNames.filter(e=>
    {
        return e.length===len
    })
console.log(l)