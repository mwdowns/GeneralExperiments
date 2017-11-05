function rot13(str) { // LBH QVQ VG!
  var words = str.split(" ");
  var punctuation = "";
  var lastWord = words[words.length - 1];
  if ( lastWord.charCodeAt(lastWord.length - 1) < 65 || lastWord.charCodeAt(lastWord.length - 1) > 90) {
    punctuation = lastWord.slice(-1);
    words[words.length - 1] = lastWord.substr(0, lastWord.length - 1);
  }
  var wordsArray = words.map(function(x) {
    return x.split("").map(function(y) {
      var code = y.charCodeAt(0);
      var newCode = 0;
      if (code >= 78 && code <= 90) {
        newCode = code - 13;
      } else {
        newCode = code + 13;
      }
      return String.fromCharCode(newCode);
    });
  });
  wordsArray[wordsArray.length - 1].push(punctuation);
  words = wordsArray.map(function(x) {
    return x.join("");
  });
  str = words.join(" ");
  return str;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC!"));