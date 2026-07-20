//continuation of array and its methods

//Array: it is a collection of different or similar type of data. It is a data structure that can hold more than one value at a time.
// It is an ordered collection of elements, where each element is identified by an index or a key.
// In JavaScript, arrays are dynamic, meaning they can grow or shrink in size as needed.
// Arrays can hold elements of any data type, including numbers, strings, objects, and even other arrays.
// It is a data structure that can hold more than one value at a time.

let x = []; // length = 5

x[0] = "apple";
x[1] = "banana";
x[2] = "mango";
x[3] = "grapes";
x[4] = "orange";

x[5] = "kiwi"; // length = 6 , we have added a new element at index 5, which is "kiwi"

x[1] = "pineapple"; // length = 6, replace banana with pineapple

//index    0       1        2         3         4

console.log(x[0]); // apple
console.log(x[1]); // pineapple
console.log(x[2]); // mango
console.log(x[3]); // grapes
console.log(x[4]); // orange
console.log(x[5]); // kiwi

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //console.log(numbers);

// let mixed = [1, "apple", true, null, undefined, { name: "John" }, [1, 2, 3]];

// let i;

// console.log(i);

// i = 123;

// console.log(i);

// for (let i = 0; i < x.length; i++) {
//   //console.log(x[i]);
// }

// // for (let i = 0; i < numbers.length; i++) {
// //   console.log(i);

// }
const num1 = [1, 2, 3, 4, 5, 6, 7];

const num2 = new Array(10, 12, 14, 16);

console.log(num1);
console.log(num2);
console.log(num2.length);

num1[7] = 8;

console.log(num1);

num1.push(9);

console.log(num1);

num1.pop(); // will delete last elements

console.log(num1);

//shift()

// remove first element

num1.shift();

console.log(num1);

num1.unshift(1);
console.log(num1);

num1.push(3);

// inclueds(): Array element exist or not

console.log(num1.includes(1));

console.log(num1.indexOf(3)); // first maching index

console.log(num1.lastIndexOf(3));

//slice() , Splice()
//slice()---->Copy
//splice()---->cut(modify)

//array.slice(start , end) end---> excluded, start--included
//                 0        1.       2          3
const fruits = ["Apple", "Banana", "mango", "orange"];

console.log(fruits);

const result = fruits.slice(1, 3);

console.log(fruits);
console.log(result);

//splice(start , deletcount, item1, item2..)

//const result1 = fruits.splice(1, 3);

//const result1 = fruits.splice(1, 3, "Pineapple", "cherry", "Avacado");

const result1 = fruits.splice(1, 0, "Guava", "Dragonfruite");

console.log(fruits);
console.log(result1);

const a = [1, 2];
const b = [3, 4];

console.log(a.concat(b));

console.log(fruits.join("%"));

console.log(fruits.reverse());

const jumble = [40, 20, 10, 25, 12, 14, 13, 11, 6];

console.log(jumble);

jumble.sort(); // it sorts string only

jumble.sort((a, b) => a - b);

console.log(jumble);

jumble.sort((a, b) => b - a);

console.log(jumble);

fruits.sort();

console.log(fruits);

const values = [1, 2, 3, 4, 5, 6]; // 1 , 4, 9 , 16 , 25 , 36

const squar = values.map((num) => num * num);

console.log(squar);

const even = squar.filter((num) => num % 2 === 0);

console.log(even);

const sum = even.reduce((sum, num) => sum + num, 0);

console.log(sum);

const finalresult = values
  .map((num) => num * num)
  .filter((num) => num % 2 === 0)
  .reduce((sum, num) => sum + num, 0);

console.log(finalresult);

const nums = [2, 4, 5, 6, 7];

console.log(nums.find((num) => num % 2 !== 0)); // element

console.log(nums.findIndex((num) => num % 2 !== 0)); // index --first

console.log(nums.findLastIndex((num) => num % 2 !== 0));

console.log(nums.every((num) => num % 2 !== 0)); //

console.log(nums.some((num) => num % 2 !== 0)); //

nums.forEach((nums) => {
  console.log(nums);
});

const arr = [
  [1, 2],
  [3, 4],
];

console.log(arr);

const newarr = arr.flat();

console.log(newarr.flatMap((x) => [x, x * 2]));
