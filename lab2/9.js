const person = {
  name: `Peter`,
  greet: function (date, etc) {
    console.log(
      `Today is ${date}! How are you, ${this.name}? Oh... ${this.name}... ${etc}.`,
    );
  },
};

const nameChange = { name: `Brian` };
person.greet.call(nameChange, `31/01/1999`, `Ellie is here`);
person.greet.apply(nameChange, [`31/01/2000`, `Today is our show's birthday!`]);
const dialogueBrian = person.greet.bind(
  nameChange,
  `31/01/2001`,
  `Today is our show's 2d birthday!`,
);
dialogueBrian();
