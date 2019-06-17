const FIRSTNAME = "name";
const BIRTHDAY = "birthday";
const KNOW_DAYS = "know_days_left";
exports.FIRSTNAME = FIRSTNAME;
exports.BIRTHDAY = BIRTHDAY;
exports.KNOW_DAYS = KNOW_DAYS;

exports.QUESTIONS = [
  {
    name: FIRSTNAME,
    type: "input",
    message: "What is the your first name"
  },
  {
    type: "input",
    name: BIRTHDAY,
    message: "What is your date of birth (YYYY-MM-DD)",
    filter: function(val) {
      return val;
    }
  },
  {
    type: "input",
    name: KNOW_DAYS,
    message: "Do you want to know how many days till your next birthday",
    filter: function(val = "") {
      const regex = /[^A-Za-z]/g;
      const cleaned = val.replace(regex, "");
      return cleaned;
    }
  }
];
