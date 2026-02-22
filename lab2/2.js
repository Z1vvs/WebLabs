function values(f, low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(f(i));
  }
  return array;
}

const f = (x) => x * 2;
console.log(values(f, 2, 3));
