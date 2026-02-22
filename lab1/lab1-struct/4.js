const foods = [`pizza`, `sushi`, `hotdog`];
const drinks = [`cola`, `juice`, `water`];

const combine1 = [...foods, ...drinks];
console.log(combine1);

const combine2 = foods.concat(drinks);
console.log(combine2);

const combine3 = [...foods];
combine3.push(...drinks);
console.log(combine3);

const combine4 = [...foods];
for (drink of drinks) {
  combine4.push(drink);
}
console.log(combine4);
