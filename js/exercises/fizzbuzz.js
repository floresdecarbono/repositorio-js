function fizzbuzz(number) {
  if (isDivisibleBy(number, 3) && isDivisibleBy(number, 5))
    return 'FizzBuzz';
  else if (isDivisibleBy(number, 3))
    return 'Fizz';
  else if (isDivisibleBy(number, 5))
    return 'Buzz';
  else
    return number;

}

function isDivisibleBy(dividend, divisor) {
  return dividend % divisor === 0; 
}

console.log(fizzbuzz(30));