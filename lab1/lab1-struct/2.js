const defaults = { mode: `test`, debugLevel: `error`, logFolder: `root` };
const userSettings = { mode: `production`, debugLevel: `trace` };

function mergeSettings1(def, user) {
  let result = {};
  for (let key in def) {
    result[key] = def[key];
  }
  for (let key in user) {
    result[key] = user[key];
  }
  return result;
}

function mergeSettings2(def, user) {
  return { ...def, ...user };
}

function mergeSettings3(def, user) {
  return Object.assign({}, def, user);
}

finalUser1 = mergeSettings1(defaults, userSettings);
console.log(finalUser1);
console.log(`\n`);

finalUser2 = mergeSettings2(defaults, userSettings);
console.log(finalUser2);
console.log(`\n`);

finalUser3 = mergeSettings3(defaults, userSettings);
console.log(finalUser3);
console.log(`\n`);
