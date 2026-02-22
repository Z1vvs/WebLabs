function average(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum / args.length;
}

console.log(average(1, 2, 3, 4, 5, 6, 7, 8));
