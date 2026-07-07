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
