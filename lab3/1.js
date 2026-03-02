function invokeAfterDelay(callback, delay) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var result = callback();
      resolve(result);
    }, delay);
  });
}

const getRandom = () => Math.floor(Math.random() * 11);

invokeAfterDelay(getRandom, 2000).then(function (res) {
  console.log(`Result: ${res}`);
});
