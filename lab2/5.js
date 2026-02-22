let cacheName = ``;
let cacheResult = ``;

function getGreeting(name) {
  if (name === cacheName) {
    console.log(`${name} was returned from cache!`);
    return cacheResult;
  }
  cacheName = name;
  cacheResult = `Hello ${name}`;
  return cacheResult;
}

console.log(getGreeting(`Gideon`));
console.log(getGreeting(`Gideon`));
console.log(getGreeting(`Bitsy`));
