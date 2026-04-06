//Task 1
const numbers1 = [1, 2, 3, 4, 5];

console.log("Task 1");

numbers1.forEach(function(num) {
  console.log(num * 2);
});


//Task 2
const numbers_task2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("\nTask 2");

numbers_task2.forEach(function(num) {
    if(num % 2 === 0){
        console.log(num);
    }
});


//Task 3
const numbers_task3 = [40, 60, 50, 30, 80, 77, 82, 99, 123, 2];

console.log("\nTask 3");

numbers_task3.forEach(function(num) {
    if(num > 50){
        console.log(num);
    }
});


//Task 4
const students1 = [
 { name: "Ali", marks: 80 },
 { name: "Sara", marks: 45 },
 { name: "John", marks: 60 }
];

console.log("\nTask 4");

students1.forEach(function(student) {
    if(student.marks >= 50){
        console.log(student.name);
    }
});


//Task 5
const truckDistances = [
    { truckid: "Truck A", dailyDistances: [50, 60, 70, 80, 90] },
    { truckid: "Truck B", dailyDistances: [40, 60, 55, 65, 70] },
    { truckid: "Truck C", dailyDistances: [100, 120, 130, 110, 115] },
    { truckid: "Truck D", dailyDistances: [30, 40, 50, 60, 45] }
];

console.log("\nTask 5");

truckDistances.forEach(function(currentValue) {
    let totalDistance = 0;
    
    for (let td of currentValue.dailyDistances) {
        totalDistance += td;  
    }
    
    let total_earnings = totalDistance * 10;
    
    console.log(currentValue.truckid, totalDistance, total_earnings);
});


//Task 6
const shoppingCart = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Phone", price: 700, quantity: 2 },
  { name: "Headphones", price: 150, quantity: 3 },
  { name: "Smartwatch", price: 250, quantity: 1 }
];

console.log("\nTask 6");

const updatedCart = shoppingCart.map(item => {
  return {
    name:item.name,
    price:item.price,
    quantity: item.quantity,
    total_price: item.price * item.quantity
  };
});

console.log(updatedCart);


//Task 7
const result = [
  { id: 'student-1', marks: 45 },
  { id: 'student-2', marks: 78 },
  { id: 'student-3', marks: 88 },
  { id: 'student-4', marks: 59 },
  { id: 'student-5', marks: 90 }
];

console.log("\nTask 7");

const updated_result = result.map(student => {
  let grade;

  if (student.marks >= 90) grade = 'A+';
  else if (student.marks >= 80) grade = 'A';
  else if (student.marks >= 70) grade = 'B';
  else if (student.marks >= 60) grade = 'C';
  else grade = 'D';

  return {
    ...student,
    grade: grade
  };
});

console.log(updated_result);


//Task 8
const number = [1, 2, 3, 4, 5];

console.log("\nTask 8");

const total_sum = number.reduce((acc, num) => acc + num, 0);
console.log(total_sum);

const product = number.reduce((acc, num) => acc * num, 1);
console.log(product);

const largest_num = number.reduce((max, num) => num > max ? num : max, number[0]);
console.log(largest_num);

const even_num = number.reduce((count, num) => num % 2 === 0 ? count + 1 : count, 0);
console.log(even_num);


//Task 9
const shopping_Cart = [
 { name: "Laptop", price: 1000, quantity: 1 },
 { name: "Phone", price: 700, quantity: 2 },
 { name: "Headphones", price: 150, quantity: 3 },
 { name: "Smartwatch", price: 250, quantity: 1 }
];

console.log("\nTask 9");

const total_value = shopping_Cart.reduce((acc, item)=>{
    return acc + (item.price * item.quantity);
},0);

console.log(total_value);


//Task 10
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

console.log("\nTask 10");

const frequency = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(frequency);


//Task 11
const numbers11 = [1, 2, 3, 4, 5, 6];

console.log("\nTask 11");

const evenNumbers = numbers11.filter(num => num % 2 === 0);

console.log(evenNumbers);


//Task 12
const students12 = [
  { name: "Ali", marks: 80 },
  { name: "Sara", marks: 45 },
  { name: "John", marks: 60 }
];

console.log("\nTask 12");

const passedStudents = students12.filter(student => student.marks >= 50);

console.log(passedStudents);


//Task 13
const numbers13 = [1, 3, 5, 6, 7];

console.log("\nTask 13");

const firstEven = numbers13.find(num => num % 2 === 0);

console.log(firstEven);


//Task 14
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
  { name: "Phone", price: 700 }
];

console.log("\nTask 14");

const firstExpensiveProduct = products.find(product => product.price > 500);

console.log(firstExpensiveProduct);
