// DON'T DO THIS
// const dog = {
//   name: 'Marley',
//   breed: 'Chocolate Lab',
//   age: 3,
//   weightInPounds: 60,

//   eat: function() {
//     console.log('Chomp!');
//   },
//   bark() {
//     console.log('Woof!');
//   }
// }

// DO THIS!
// Factory Function
function getDog(name, breed, age, weightInPounds) {
  return {
    name: name,
    breed: breed,
    age: age,
    weightInPounds: weightInPounds,

    eat() {
      console.log('Chomp!');
    },
    bark() {
      console.log('Woof!');
    }
  }
}
const dog = getDog('Marley', 'Chocolate Lab', 3, 60);
