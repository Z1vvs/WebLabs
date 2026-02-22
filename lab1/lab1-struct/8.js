const persons = [
  { name: `John`, age: `23`, city: `Boston` },
  { name: `Max`, age: `20`, city: `Kyiv` },
  { name: `Melissa`, age: `25`, city: `Kharkiv` },
  { name: `Andrew`, age: `99`, city: `The Lab` },
  { name: `Jeffrey`, age: `73`, city: `Island` },
];

function getUserData(name) {
  for (let person of persons) {
    if (person.name === name) {
      return person;
    }
  }
  throw new Error(`Unable to find user`);
}

function showUserInfo(name) {
  console.log(`Loading`);
  try {
    console.log(getUserData(name));
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log(`Loading finished`);
  }
}

showUserInfo(`Melissa`);
showUserInfo(`Alex`);
