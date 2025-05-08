// Object Orientation
// ES5
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};
const person1 = new Person("John", "Doe", "3-4-2022");
const person2 = new Person("Mary", "Smith", "3-6-1998");

console.log(person1.firstName);
console.log(person2.getBirthYear());
console.log(person2.getFullName());

//ES6
class Person2 {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  etBirthYear() {
    return this.dob.getFullYear();
  }
}

const person3 = new Person2("John", "Doe", "3-4-2022");
const person4 = new Person2("Mary", "Smith", "3-6-1998");

console.log(person3.firstName);
console.log(person4.getBirthYear());
console.log(person4.getFullName());
