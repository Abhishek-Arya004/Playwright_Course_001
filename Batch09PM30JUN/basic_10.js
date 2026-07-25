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

//object comparison

const a = { name: "john" }; // a = Id , b = Id ---> reference variable --->uqiue

const b = { name: "john" };

console.log(a == b);
console.log(a === b);

//

const obj1 = { name: "john" };

const obj2 = obj1;

console.log(obj1 == obj2); //true

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 == arr2);

console.log(a.name == b.name);

const a1 = { num: 10 };
const b1 = a1;
const c1 = { num: 10 };

console.log(a1 === b1); //false. | true
console.log(a1 === c1); //false. | false
console.log(b1 === c1); //false. |. false

//Json ----> Javascritp--object----->json

//js object

const emp = {
  id: 101,
  name: "Arya",
};

//convert js object into json object

const json = JSON.stringify(emp);

//convert back to json to js object

const jsobject = JSON.parse(json);

//Json response

// {

// "id" : "1243";
// "name" : "laptop";

// }

//Can we pass object in method?

function add(a) {
  console.log(a);
}

add(emp);

// bracket notation and what is dot notation

const person5 = {
  name: "Abhishek",
  age: "36",
  city: "Noida",
};

person5.value = "Test";

console.log(person5.value); // dot notaion
console.log(person5["value"]); // bracket notation

let key = "name";

console.log(person5[key]); // value // dynamic property access

console.log(person5.key); // undefine

// spaces in Property name

const accounts = {
  "first name": "Abhishek",
  "last name": "Arya",
};

console.log(accounts["first name"]);

const object = {};

object["Name"] = "Abhishek";
object["city"] = "NOida";

console.log(object);

object["Name"] = "Pooja";

console.log(object);

delete object["Name"];

const calculor = {
  add(a, b) {
    return a + b;
  },
};

console.log(calculor["add"](20, 10));
