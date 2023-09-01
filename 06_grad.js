// Write a function that takes an array of objects with a name and grades property
// and returns a new array with only the objects where the average grade is greater
// than a given amount. Use the filter method to accomplish this.
// const students = [
//     { name: 'Alice', grades: [90, 85, 88] },
//     { name: 'Bob', grades: [78, 82, 75] },
//     { name: 'Charlie', grades: [95, 92, 88] },
//     { name: 'David', grades: [85, 88, 92] },
//     { name: 'Emily', grades: [70, 75, 80] }
//   ];
// avg=56  
//   function sum(array){
//     let sum=0;

//     for(let i of array){
//         sum+=i;
//     }
//     return sum
//   }
//   l=students.filter(e=>{
//     const avrg=sum(e.grades)/e.grades.length;
//     return avrg>avg;

//   });
// console.log(l)
const students = [
    { name: 'Alice', grades: [90, 85, 88] },
    { name: 'Bob', grades: [78, 82, 75] },
    { name: 'Charlie', grades: [95, 92, 88] },
    { name: 'David', grades: [85, 88, 92] },
    { name: 'Emily', grades: [70, 75, 80] }
  ];
  
  const avg = 95;
  
  function sum(array) {
    let sum = 0;
  
    for (const grade of array) {
      sum += grade;
    }
  
    return sum;
  }
  
  const filteredStudents = students.filter(student => {
    const averageGrade = sum(student.grades) / student.grades.length;
    return averageGrade > avg;
  });
  
  console.log(filteredStudents);
  