// let car = {
//   color: "Red",
//   name: "BMW",
// };

// console.log(car);

// console.log(car.color);

// let person = {};

// person.name = "Arya";
// person.age = 35;
// person.address = "Noida";

// console.log(person.age);

// const person1 = new Object({
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// });

// console.log(person1);

// // console.log(person1.lastName);
// // console.log(person1["lastName"]);

// let person3 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(person3);

// //console.log(person3.fullName());

// person3.add = function (a, b) {
//   console.log(a + b);
// };

// //person3.add(2, 3);

// let n1 = "firstName";

// person3[n1];

// console.log(person3[n1]);

// person3.firstName = "Arya";

// console.log(person3);

// delete person3.age;

// //Check if a Property Exists

// let result = "firstName" in person3;

// //Check if a Property Exists

// console.log(result);

// myObj = {
//   name: "John",
//   age: 30,
//   myCars: {
//     car1: "Ford",
//     car2: "BMW",
//     car3: "Fiat",
//   },
// };
// console.log(myObj);

// console.log(myObj.name);

// console.log(myObj.myCars);

// console.log(myObj.myCars);

// console.log(myObj.myCars.car2);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   getId: function() {
//     return this.id;
//   }
// };

// let number = person.getId();

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Add Properties
let text = person.name + "," + person.age + "," + person.city;

//console.log(text);

for (let x in person) {
  text = text + person[x] + " ";
}

//console.log(text);

// Create an Array
const myArray = Object.values(person);

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
