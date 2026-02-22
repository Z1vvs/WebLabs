const persons = [
  { name: `John`, age: `23`, city: `Boston` },
  { name: `Max`, age: `20`, city: `Kyiv` },
  { name: `Melissa`, age: `25`, city: `Kharkiv` },
  { name: `Andrew`, age: `99`, city: `The Lab` },
  { name: `Jeffrey`, age: `73`, city: `Island` },
];

const [person] = persons;
const { name: nam, city: cit } = person;

console.log(nam, cit);
console.log(person);
