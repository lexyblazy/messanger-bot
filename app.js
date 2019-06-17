const express = require("express");
const app = express();
const inquirer = require("inquirer");
const PORT = process.env.PORT || 5000;
const { QUESTIONS } = require("./constants");
const { evaluateAnswers } = require("./util");
const askQuestions = () => {
  return inquirer.prompt(QUESTIONS);
};
const Messages = require("./messages");

const messages = new Messages();

app.get("/messages", (req, res) => {
  res.send(messages.getMessages());
});

app.get("/messages/:id", (req, res) => {
  res.send(messages.getMessage(req.params.id));
});

app.listen(PORT, async () => {
  const answers = await askQuestions();
  evaluateAnswers(answers);
  messages.saveMessage(answers);
});
