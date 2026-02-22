function isThisJS(filename) {
  return filename.endsWith(`.js`);
}

console.log(isThisJS(`Aboba.mp4`));
console.log(isThisJS(`Imajsfile.js`));
