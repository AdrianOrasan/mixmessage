const first = [
  ["You"],
  ["should", "are", "might", "are supposed to", "shouldn't", "aren't"],
  ["winning", "losing", "made it", "fighting"],
];

function generateMessage() {
  let genMsg = [];

  for (let i = 0; i < first.length; i++) {
    genMsg.push(first[i][Math.floor(Math.random() * first[i].length)]);
  }

  return genMsg.join(" ");
}

console.log(generateMessage());
