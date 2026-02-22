function callWithContext(obj, callback) {
  callback.call(obj, new Date().toDateString());
}

const person = {
  name: `Peter`,
  age: `45`,
  etc: `The horse is here`,
};

callWithContext(person, function (date) {
  console.log(
    `Today is ${date}! Happy birthday ${this.name}! Oh... ${this.name}... ${this.etc}.`,
  );
});
