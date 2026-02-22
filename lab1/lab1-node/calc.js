const action = process.argv[2];
const numbers = process.argv.slice(3);
let result = Number(numbers[0]);

for (let arg of numbers.slice(1)) {
  let num = Number(arg);

  if (action === `add`) result += num;
  if (action === `sub`) result -= num;
  if (action === `mul`) result *= num;
  if (action === `div`) result /= num;
  // Можна також свіч-кейсом зробити :P
}

console.log(`Result = ${result}`);
