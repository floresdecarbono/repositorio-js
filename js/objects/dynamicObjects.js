let person = {
  name: 'Steven'
};

// console.log(person);

person.favoriteFood = 'Tacos';
// console.log(person);

person['favoriteIceCream'] = 'Chocolate';
// console.log(person);

delete person.favoriteIceCream;
// console.log(person);

person.eat = function() {
  console.log('Start eating');
}

// person.eat();
