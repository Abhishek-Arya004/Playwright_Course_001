//object is a collection of key value pairs it can store multiple values in a single variable
//it can also have properties and methods
//this keyword refers to the current object and is used to access properties and methods of the object
//In javascript, almost everything is an object, including strings, numbers, arrays, functions, and more.
// Objects can be created using object literals, constructors, or classes.
//object are objects are mutable, meaning their properties can be changed after they are created.
//Maths are built-in objects in javascript that provide mathematical constants and functions for performing mathematical operations.
//Dates are built-in objects in javascript that provide methods for working with dates and times.`
//Arrays are objects in javascript that provide methods for working with lists of data.
//  They can store multiple values in a single variable and can be accessed using an index.
//Maps are built-in objects in javascript that provide a collection of key-value pairs, where keys can be of any data type.
//Sets are built-in objects in javascript that provide a collection of unique values, where each value can only occur once in the set.
//Resgular expressions are built-in objects in javascript that provide a way to match patterns in strings using regular expression syntax.
//Erros are built-in objects in javascript that provide a way to handle errors and exceptions in code, allowing developers to catch and handle errors gracefully.
//except primirive data types, all other data types in javascript are objects.
//Primitive data types in javascript include string, number, boolean, null, undefined, and symbol.
// These data types are immutable and do not have properties or methods like objects do.

const car = {
  color: "red",
  name: "BMW",
  model: "X5",
};

// console.log(car);

// console.log(car.color);
// console.log(car.name);
// console.log(car.model);

const person = {}; // empty object

person.name = "Arya";
person.age = 35;
person.address = "Noida";

//console.log(person);

const person1 = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
});
//console.log(person1.firstName); // dot notation
//console.log(person1["firstName"]); // bracket notation
//expression can be used in bracket notation to access properties dynamically
let x = "age";
let realage = person1[x];

person1.firstName = "Arya"; // changing the value of firstName property
person1.nationality = "Indian"; // adding a new property to the object

//console.log(person1);

delete person1.age; // deleting the age property from the object

//console.log(person1);

const person3 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

//console.log(person3.fullName());

let result = "firstName" in person3; // checking if the property exists in the object
//console.log(result);
//console.log("firstName" in person3); // true

//class ----> blueprint for creating objects with predefined properties and methods.
//  It allows you to define a template for objects, and then create multiple instances of that template with different values for the properties.
//  Classes are a fundamental part of object-oriented programming in JavaScript and provide a way to organize and structure code in a more modular and reusable way.

// Buidling----Bluprint--->Map---->Details---Base--Noida--object

//Hydrabad---builprint----->Same area

// Kitchen , hall , masterroom, drwing room, bathroom, balcony, terrace, garden, parking

// class Building {
//   constructor(area, location) {
//     this.area = area;
//     this.location

//nexted objects

const myobj = {
  name: "Arya",
  age: 35,
  address: {
    city: "Noida",
    state: "UP",
    country: "India",
    fulldetails: function () {
      return (this.city + " " + this.state + " " + this.country).toUpperCase();
    },
  },
};

console.log(myobj.address.city); // accessing nested object property using dot notation
console.log(myobj.address.fulldetails()); // accessing nested object method using dot notation

//this is a reference to the current object, and in this case, it refers to the address object. Therefore, this.city, this.state, and this.country refer to the properties of the address object.

//const x = this;

const person4 = {
  name: "Arya",
  age: 35,
  city: "Noida",
};

let text1 = "";
for (let x in person4) {
  text1 += person4[x] + " "; // text1 = text1 + person4[x] + " ";  // accessing object properties using bracket notation
}
console.log(text1);

const myArrray = Object.values(person4);
let text = myArrray.toString(); // returns an array of the object's values
console.log(text);

//converting object to string using JSON.stringify() method

const myString = JSON.stringify(person4);
console.log(myString);

//constructors are special functions that are used to create and initialize objects in JavaScript. They are typically defined using the function keyword and are called using the new keyword. Constructors can take parameters that are used to set the initial values of the object's properties.

//diference between class and constructor function is that class is a blueprint for creating objects, while constructor function is a function that is used to create and initialize objects. Classes provide a more structured and organized way to define objects,
// while constructor functions are more flexible and can be used in a variety of ways.
//if I want to create multiple objects with the same properties and methods, I can use a class or a constructor function to define the blueprint for those objects. Then, I can create new instances of that class or constructor function using the new keyword, which will create a new object with the same properties and methods as the original blueprint.

// Object constructor function
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.fullDetails = function () {
    return this.name + " " + this.age + " " + this.city;
  };
}

const person5 = new Person("Arya", 35, "Noida");
const person6 = new Person("ram", 36, "Noida");

console.log(person5.name); // accessing object property using dot notation
console.log(person5.age); // accessing object property using dot notation
console.log(person5.city); // accessing object property using dot notation
console.log(person5.fullDetails()); // accessing object method using dot notation
//class
//build in constructor in javascript
//new Object() constructor
//new Array() constructor
//new Function() constructor
//new Date() constructor
//new RegExp() constructor
//new Error() constructor
//new Map() constructor
//new Set() constructor
