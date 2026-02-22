function replaceWord(tex, index, newOne) {
  const words = tex.trim().split(/\s+/);
  if (index < words.length) {
    words[index] = newOne;
  }
  return words.join(` `);
}

const text = `Hello there! Vault-Tec calling!`;
console.log(replaceWord(text, 2, `Kitty`));
