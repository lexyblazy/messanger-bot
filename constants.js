const FIRSTNAME = "FIRSTNAME";
const BIRTHDAY = "BIRTHDAY";
const DAYS_TO_NEXT_BIRTHDAY = "DAYS_TO_NEXT_BIRTHDAY";
exports.FIRSTNAME = FIRSTNAME;
exports.BIRTHDAY = BIRTHDAY;
exports.DAYS_TO_NEXT_BIRTHDAY = DAYS_TO_NEXT_BIRTHDAY;

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
    name: DAYS_TO_NEXT_BIRTHDAY,
    message: "Do you want to know how many days till your next birthday",
    filter: function(val = "") {
      const regex = /[^A-Za-z]/g;
      const cleaned = val.replace(regex, "");
      return cleaned;
    }
  }
];
