const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getEncrypted(message) {
  let temp1 = "";
  let temp2 = "";

  message = message.split(" ").join("");

  for (let i = 0; i < message.length; i++) {
    if (i % 2 === 0) {
      temp1 += message[i];
    } else {
      temp2 += message[i];
    }
  }

  return temp1 + temp2;
}

function getDecrypted(message) {
  let decryptedText = "";

  message = message.split(" ").join("");
  message = message.toLowerCase();

  const mid = Math.ceil(message.length / 2);

  for (let i = 0; i < mid; i++) {
    if (i + mid < message.length) {
      decryptedText += message[i] + message[i + mid];
    } else {
      decryptedText += message[i];
    }
  }

  return decryptedText;
}

rl.question("Enter the message you want to encrypt:\n", (message) => {
  const encrypted = getEncrypted(message);
  const decrypted = getDecrypted(encrypted);

  console.log("Encrypted text:", encrypted);
  console.log("Decrypted text:", decrypted);

  rl.close();
});
