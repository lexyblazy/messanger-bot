const express = require("express");
const app = express();
const mongoose = require("mongoose");
const inquirer = require("inquirer");
const PORT = process.env.PORT || 5000;
const { QUESTIONS, DBURL } = require("./constants");
const { evaluateAnswers } = require("./util");
const { getMessage, getMessages } = require("./controller");
const askQuestions = () => {
  return inquirer.prompt(QUESTIONS);
};

mongoose
  .connect(DBURL, { useNewUrlParser: true })
  .then(async () => {
    //eslint-disable-next-line
    console.log("Connection to database succesful\n");
    const answers = await askQuestions();
    evaluateAnswers(answers);
  })
  .catch(() => {
    //eslint-disable-next-line
    console.log("Cannot connect to db");
    process.exit(1);
  });
app.get("/messages", getMessages);

app.get("/messages/:id", getMessage);

app.listen(PORT);
