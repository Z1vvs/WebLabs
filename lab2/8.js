const persons = [
  { name: `peter`, age: `45` },
  { name: `ygor`, age: `999` },
  { name: `bitsy`, age: `27` },
];

const capitalize = (arr, key) => {
  return arr.map((item) => ({
    ...item,
    [key]: item[key].charAt(0).toUpperCase() + item[key].slice(1),
  }));
};

console.log(capitalize(persons, `name`));
