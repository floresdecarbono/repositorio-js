function evenNumbers(arr) {
  for (let number in arr) {
    if (arr[number] % 2 === 0)
      console.log(arr[number]);
  }
}

function oddNumbers(arr) {
  for (let number of arr) {
    if (number % 2 != 0)
      console.log(number)
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('-=-=-=- EVEN NUMBERS -=-=-=-')
evenNumbers(arr);

console.log('-=-=-=- ODD NUMBERS -=-=-=-')
oddNumbers(arr);
