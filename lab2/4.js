function counter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    getValue: function () {
      return count;
    },
  };
}

const cntr = counter();

cntr.increment();
cntr.increment();
cntr.increment();
cntr.increment();
cntr.increment();

console.log(cntr.getValue());
