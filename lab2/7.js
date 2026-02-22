const persons = [`Peter`, `Ygor`, `Bitsy`];

function search(list) {
  return function (shard) {
    return list.includes(shard);
  };
}

const searchPersons = search(persons);
console.log(searchPersons(`Bitsy`));
console.log(searchPersons(`Meg`));
