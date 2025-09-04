// primitive values are copied by their value

// let a = 10;
// let b = a;

// a = 20;

// console.log(a);
// console.log(b);

// primitive values are passed by copy, not by reference

// objects are copied by reference

let a = {value: 20};
let b = a;

a.value = 100;

console.log(a);
console.log(b);