const persons = [
  { name: `John`, age: `23`, city: `Boston` },
  { name: `Max`, age: `20`, city: `Kyiv` },
  { name: `Melissa`, age: `25`, city: `Kharkiv` },
  { name: `Andrew`, age: `99`, city: `The Lab` },
  { name: `Jeffrey`, age: `73`, city: `Island` },
];

const currentYear = new Date().getFullYear();

for (person of persons) {
  Object.defineProperty(person, `birthYear`, {
    get: function () {
      return currentYear - this.age;
    },
    enumerable: true,
    configurable: false,
  });
  console.log(person.birthYear);
}
