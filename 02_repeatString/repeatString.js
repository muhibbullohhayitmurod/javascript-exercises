const repeatString = function (str, num) {
  if (num >= 0) {
    let emptyStr = "";
    for (let i = 0; i < num; i++) {
      emptyStr += str;
    }
    return emptyStr;
  }else{
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
