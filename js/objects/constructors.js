// Object Constructor
function Dog(name, breed, age, weightInPounds) {
  // this = {}

  // Add properties to this
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.weightInPounds = weightInPounds;

  this.eat = function() {
    console.log(this.name + ': Chomp!');
  }

  this.bark = function() {
    console.log(this.name + ': Woof!');
  }

  // return this;

}

const anotherDog = new Dog('Krypto', 'SuperDog', 3, 60);
console.log(anotherDog);



// const person = {
//   name: 'Steven'
// };
// console.log(person.constructor);

// let newObj = {};
let newObj = new Object();

new String(); // 'Steven'
new Boolean(); // true, false
new Number(); // 1, 2, 3

