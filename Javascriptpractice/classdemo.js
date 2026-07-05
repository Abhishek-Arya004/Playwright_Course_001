//class in javascript

//class is a blueprint for creating objects with predefined properties and methods.
// It provides a way to define the structure and behavior of objects in a more organized and reusable manner.

// for example map of building with different floors and rooms, each floor has different rooms with different properties and methods.

//1000 sqt is flat, -->Gurgaon, 2BHK---Map--Paper--Details--Base--Noida--object

// gurgaon , pune, hydrabaad--Map

//base---bluprint--->details--->object---building---map---details---base---noida--object
//class is template for creating objects with predefined properties and methods.
//  It allows you to define a blueprint for objects, and then create multiple instances of that blueprint with different values for the properties.
//  Classes are a fundamental part of object-oriented programming in JavaScript and provide a way to organize and structure code in a more modular and reusable way.

class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  constructor() {
   
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old. I live in ${this.address}.`,
    );
  }
}

const person1 = new Person("Arya", 35, "Noida");
const person2 = new Person("John", 50, "Gurgaon");
const person3 = new Person();

person1.greet(); // Output: Hello, my name is Arya and I am 35 years old. I live in Noida.
person2.greet(); // Output: Hello, my name is John and I am 50 years old. I live in Gurgaon.

console.log(person1.name); // Output: Arya
console.log(person2.age); // Output: 50
//

class car extends Person {
  constructor(name, age, address, model) {
    super(name, age, address);

    this.model = model;
  }

  printModel() {
    console.log(this.model);
  }
}

//const car1 = new car("BMW");
//car1.printModel(); // Output: BMW
const car2 = new car("arya", 34, "noida");

car3.greet();

