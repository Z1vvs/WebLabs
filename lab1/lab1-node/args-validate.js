const fs = require(`fs`);
let output = ``;
for (let arg of process.argv.slice(2)) {
  output += `Received: ${arg}\n`;
}
fs.writeFileSync(`quotes-notes.txt`, output);
console.log(`Done!`);
