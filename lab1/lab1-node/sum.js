let sum = 0;
for (let arg of process.argv.slice(2)) {
  sum += Number(arg);
}
console.log(`Sum = ${sum}`);
