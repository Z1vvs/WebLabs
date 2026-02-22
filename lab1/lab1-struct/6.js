const persons = [
  { name: `John`, age: `23`, city: `Boston` },
  { name: `Max`, age: `20`, city: `Kyiv` },
  { name: `Melissa`, age: `25`, city: `Kharkiv` },
  { name: `Andrew`, age: `99`, city: `The Lab` },
  { name: `Jeffrey`, age: `73`, city: `Island` },
];

for (person of persons) {
  if (person.age > 20) {
    console.log(person);
  }
}
