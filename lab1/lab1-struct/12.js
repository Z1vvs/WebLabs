function textToArray(text) {
  return text.trim().split(/\s+/);
}

console.log(textToArray(`Hello there! Vault-Tec calling!`));
