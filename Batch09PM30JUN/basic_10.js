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

//Person---Pooja and Roshani ---Object---> Property and Methods

const person1 = {
  name: "Abhishek",
  age: "36",
  city: "Noida",
};

const person2 = {
  name: "Pooja",
  age: "36",
  city: "Noida",
  display: function () {
    //console.log(this.name + " " + this.age + " " + this.city);

    return this.name + " " + this.age + " " + this.city;
  },
};

//console.log(person1);
console.log(person1.name);
//console.log(person1);
const var1 = person2.display();

console.log(var1);

console.log(person2.display());

console.log(person2["display"]());

person1.address = "Lucknow Alambagh"; // adding

//notation---> Objectname.key  or Objectname["key"] , method --> objectname["keyname"]();

console.log(person1);

person1.name = "Arya"; // update

console.log(person1);

person1.hello = function () {
  console.log("Hello this is Arya");
};

person1.hello();

delete person1.address; // delete

console.log(person1);

//this ---> current object

const person3 = {
  name: "abhishek",
  greet() {
    console.log(this.name);
  },
};

person3.greet();

//nested object

const employee = {
  name: "Roshni",

  address: {
    city: "Delhi",
    pin: "202020",
  },
};

//.  object{ Key:value , Key: { key:value , Key:value}
//
//}

console.log(employee.name);

console.log(employee.address.city);

// Arrays of objects

const employees = [
  {
    id: 1,
    name: "rahul",

    address: {
      city: "Delhi",
      pin: "202020",
    },
  },

  {
    id: 2,
    name: "amit",
  },
];

console.log(employees[0].id);

console.log(employees[1].name);

console.log(employees[0].address.pin);

const person4 = {
  name: "Abhishek",
  age: "36",
  city: "Noida",
};

for (let key in person4) {
  console.log(key, person4[key]);
}

console.log(Object.keys(person4));

console.log(Object.values(person4));

console.log(Object.entries(person4));
