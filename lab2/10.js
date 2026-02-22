function averageFunction(callback, ...args) {
  const time = new Date().toDateString();
  const functionName = callback.name;
  console.log(`Time: ${time}`);
  console.log(`Function: ${functionName}`);
  console.log(`Arguments: ${args}`);

  return callback(...args);
}

function helloThere(name, weirdThing) {
  return `${name}... The ${weirdThing} is here...`;
}

averageFunction(helloThere, `Peter`, `Horse`);
