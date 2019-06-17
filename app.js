const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});


app.listen(PORT, () => {
  readline.question(`What's your name?\n`, name => {
    console.log(`Hi ${name}!`);
    readline.close();
  });
});
