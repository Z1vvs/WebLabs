function someMexicanFunction(number) {
  return function (elNumbre) {
    return number + elNumbre;
  };
}

const addTen = someMexicanFunction(10);
console.log(addTen(5));
console.log(someMexicanFunction(6)(10));
