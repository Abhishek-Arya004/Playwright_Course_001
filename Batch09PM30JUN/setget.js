//setter or getter

class user {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const obj = new user("Sapna", 32);

console.log(obj.name);

obj.name = "Arya";

console.log(obj.name);

//A getter is a special method used to read the value propety.
//A setter is special method used to update or validate the value of a property.

//read or write ----->Not giving direct access it execute a code which will read and write for you

//Read Property ----->Getter----->Actual value
//write Property----->Setter---->update/Validate value

///Usage
const obj2 = new user("Kiran");

console.log(obj2.name);
obj2.name = "";
console.log(obj2.name);

obj2.name = "12133";
console.log(obj2.name);
