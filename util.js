const { FIRSTNAME, BIRTHDAY, KNOW_DAYS } = require("./constants");
const { saveMessage } = require("./controller/");

const getNextBirthday = (day, month) => {
  const today = new Date();
  let bday = new Date(today.getFullYear(), month, day);
  if (today.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear() + 1);
  }
  const diff = bday.getTime() - today.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return days;
};

exports.evaluateAnswers = answers => {
  const knowNextBirthday = answers[KNOW_DAYS];
  const dob = new Date(answers[BIRTHDAY]);
  const daysToNextBirthday = getNextBirthday(dob.getDate(), dob.getMonth());
  const singular = daysToNextBirthday <= 1;
  saveMessage(answers);
  switch (knowNextBirthday) {
    case "yes":
    case "yeah":
    case "yup": {
      if (daysToNextBirthday === 0) {
        // eslint-disable-next-line
        console.log(`Happy Birthday ${answers[FIRSTNAME]}`);
      } else {
        // eslint-disable-next-line
        console.log(
          `There ${singular ? "is" : "are"} ${daysToNextBirthday} ${
            singular ? "day" : "days"
          } left until your next birthday`
        );
      }
      return;
    }
    default:
      // eslint-disable-next-line
      console.log("Goodbye 👋👋👋👋");
      return;
  }
};
