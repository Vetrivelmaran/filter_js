const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 35 },
    { name: 'Emily', age: 28 }
  ];
lim=20
l =people.filter(e=>e.age>lim)
console.log(l) 
