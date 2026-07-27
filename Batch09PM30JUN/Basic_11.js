//objects--->Group---->Studenst

//class----School---->A , B , C

//math , commerece , Arts

//a ---Math--->maths--->
//b --Commerce--->
//c---Arts--->liture
//a ,b,c         student
//Blueprint----->object----->Property or action ( Methods )
//class--logical  but object---Physical
//Predefine=--->Use objects---properties and method

// const user1 = {
//   name: "Abhishek",
//   age: 38,
//   greet() {
//     console.log("Hello" + this.name);
//   },
// };

// user1.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //constructor() {}

  greet() {
    console.log("Hello" + " " + this.name + " " + this.age);
  }

  display() {
    console.log("Hello this is display method");
  }
}

//const user1 = new User("pooja", "32");

//const user2 = new User("Abhishek", "34");

// user1.greet();
// user2.greet();

const test1 = new User();

const test2 = new User("Arya", 32);

const test3 = new User("shan", 36);

test1.display();

test2.greet();

console.log(test2.age + " " + test2.name);

test3.greet();

// constructore is called when class object is created
// this is used to construct the object
//this----refer to current class object / current object
test1.display(); //this.display();

class employee extends User {
  constructor(name, age) {
    super(name, age);
    //this.name = name;
  }

  work() {
    console.log("emp working");
  }
}

const emp = new employee("Arya", 32);

// const emp = {
//name: "Shanaya";}

emp.work();

console.log(emp.name);
emp.display();
emp.greet();

//console.log(emp.age);

//inheritance ---> parent and child
