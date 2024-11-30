const reverseString = function (str) {
  let reversedStr = "";
  const strArr = str.split("");
  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedStr += strArr[i];
  }
  return reversedStr;
};
// Do not edit below this line
module.exports = reverseString;
