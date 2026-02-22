const persons = [
  { name: `John`, age: `23`, city: `Boston` },
  { name: `Max`, age: `20`, city: `Kyiv` },
  { name: `Melissa`, age: `25`, city: `Kharkiv` },
  { name: `Andrew`, age: `99`, city: `The Lab` },
  { name: `Jeffrey`, age: `73`, city: `Island` },
];

persons.groupName = `A`;
persons.teacher = `Joan Doe`;
persons.year = `2023`;

for (let i = 0; i < persons.length; i++) {
  console.log(persons[i]);
}
console.log(`\n`);

for (person of persons) {
  console.log(person);
}
console.log(`\n`);

for (key in persons) {
  console.log(`${key}`, persons[key]);
}
