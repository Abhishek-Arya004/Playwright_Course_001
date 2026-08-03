import display from "./demoClass1.js";

class B extends A {
  demo() {
    console.log("this is demo from B");
  }
}

//demo();

const b = new B();

b.demo();

//const a1 = new A();

b.display();
