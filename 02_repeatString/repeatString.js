const repeatString = function (str, timesToRepeat) {
  if (timesToRepeat < 0) return "ERROR";

  let repeatedString = "";

  for (let i = 0; i < timesToRepeat; i++) {
    repeatedString += str;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
