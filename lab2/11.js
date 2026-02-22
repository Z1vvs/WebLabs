function memorize(something) {
  let cache = null;
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();
    if (cache !== null && now - lastTime < 10000) {
      return cache;
    }
    cache = something(...args);
    lastTime = now;
    return cache;
  };
}

const d20 = memorize(() => Math.floor(Math.random() * 20) + 1);
console.log(d20());
console.log(d20());

setTimeout(() => {
  console.log(d20());
}, 11000);
