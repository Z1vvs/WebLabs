function invokeAfterDelay(callback, delay) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var result = callback();
      resolve(result);
    }, delay);
  });
}

function produceRandomAfterDelay(delay) {
  const getRandom = () => Math.floor(Math.random() * 11);
  return invokeAfterDelay(getRandom, delay);
}

// Promise.all([
//   produceRandomAfterDelay(1000),
//   produceRandomAfterDelay(2000),
// ]).then(function (results) {
//   const sum = results[0] + results[1];
//   console.log(`Results: ${results}`);
//   console.log(`Sum: ${sum}`);
// });

// .race is also a thing btw)))

let sum = 0;
produceRandomAfterDelay(1000)
  .then(function (res1) {
    console.log(`First number: ${res1}`);
    sum += res1;
    return produceRandomAfterDelay(2000);
  })
  .then(function (res2) {
    console.log(`Second number: ${res2}`);
    sum += res2;
    console.log(`Sum: ${sum}`);
  });
