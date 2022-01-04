const reverseString = function (str) {
  let reveresedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reveresedString += str[i];
  }

  return reveresedString;
};

// Do not edit below this line
module.exports = reverseString;
