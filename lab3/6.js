function logCall(callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback();
      console.log(`Time: ${new Date().toLocaleTimeString()}`);
      resolve();
    }, 1000);
  });
}

logCall(() => console.log(`Call1`))
  .then(() => logCall(() => console.log(`Call2`)))
  .then(() => logCall(() => console.log(`Call3`)))
  .then(() => logCall(() => console.log(`Call4`)))
  .then(() => console.log(`That's all, folks!`));
