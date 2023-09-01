const people = [
    { name: 'Alice', hobby: 'Reading' },
    { name: 'Bob', hobby: 'Gardening' },
    { name: 'Charlie', hobby: 'Cooking' },
    { name: 'David', hobby: 'Painting' },
    { name: 'Emily', hobby: 'Hiking' }
  ];

l =people.filter(e=>
    {
        return e.hobby==='Cooking'
    }) 
console.log(l) 
