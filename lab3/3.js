function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

async function demo() {
  console.log(`Waiting 2 seconds...`);
  await sleep(2000);
  console.log(`Yipeeee!`);
}

demo();
