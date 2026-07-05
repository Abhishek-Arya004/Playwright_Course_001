//Array-Special variable which can hold values | Size | index stating will from 0

let fruits = ["Apple", "banan", "guawa", "Apple", "berrey"];
//             0.   ,    1.  , 2

console.log(fruits);

let number = new Array(11, 22, 33, 44, 33, 56);

console.log(number[1]);

//number[4] = 45; // add new element

number[1] = 89; // update

//console.log(number);

//console.log(number.length);

number.push(56); // add it at end

console.log(number);

//number.pop(); // remove from end element

//console.log(number);

number.unshift(76); // add element at starting position of array

//console.log(number);

//number.shift(); // remove element from starting of array.

console.log(number);

//number.splice(0, 4);// it removes element from original array

//console.log(number);

let result = number.slice(1, 3); // create new array from source array
console.log(number);
//console.log(result);

//Searching
//console.log(number.indexOf(33));

console.log(number.indexOf(33, 4)); // it will -1 if element is not exist in array.

//console.log(number.toString());

console.log(number.lastIndexOf(33));

console.log(number.includes(72)); // true or false for search of element

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(first);

console.log(numbers.findIndex(myFunction));

//access array element

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

number.forEach((element) => {
  console.log(element + "+++++++++++++");
});

number.forEach(function (element) {
  console.log(element + "===============");
});

for (let value of number) {
  console.log(value);
}

console.log(fruits);

console.log(fruits.sort());

console.log(fruits.reverse());

console.log(number.sort());

const points = [40, 100, 1, 5, 25, 10];
console.log(
  points.sort(function (a, b) {
    return b - a;
  }),
);
