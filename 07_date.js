const data = [
    { name: 'Event 1', date: '2023-09-10' },
    { name: 'Event 2', date: '2023-09-15' },
    { name: 'Event 3', date: '2023-09-20' },
    { name: 'Event 4', date: '2023-09-25' },
    { name: 'Event 5', date: '2023-09-30' }
  ];

var date_start='2023-09-11'
var date_end='2023-09-20'
filter_date=data.filter(e=>{
    if(date_start<e.date && e.date<date_end ){
    return e.date
    }
})
console.log(filter_date)