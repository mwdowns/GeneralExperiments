function punctuationChecker(word) {

  var possiblePunc = word.charCodeAt(word.length -1 );
  if ( possiblePunc > 32 && possiblePunc < 48) {
    return word.slice(-1);
  }

}

function cipher(str, offset) { // LBH QVQ VG!
  var punctuation = "";
  var words = str.split(" ").map(function(word) {
    punctuation = punctuationChecker(word);
    console.log(punctuation);
    if (punctuation) {
      word = word.substr(0, word.length -1 );
    }
    console.log(word);
    // for (var i = 0; i < word.length; i++) {

    // }
    return word;
  });
  
  var wordsArray = words.map(function(x) {
    return x.split("").map(function(y) {
      var code = y.charCodeAt(0);
      var newCode = 0;
      if (code >= 78 && code <= 90) {
        newCode = code - offset;
      } else {
        newCode = code + offset;
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
console.log(cipher("SERR PBQR PNZC!", 13));