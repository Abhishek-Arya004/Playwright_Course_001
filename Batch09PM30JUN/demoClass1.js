export class A {
  display() {
    console.log("this is display from A");
  }

  static add(a, b) {
    // static method/members belogs  to class not an object
    return a + b;
  }
}

const a = new A(); //

// const a = {

// display: function(){

//     console.log("this is display from A");
//   },

// }

//}

//class {   add : function(a, b) {
//     // static method belogs  to class not an object
//     return a + b;
//   }   }

a.display();
console.log(A.add(12, 13));
