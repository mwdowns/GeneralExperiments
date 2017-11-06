function punctuationChecker(word) {
  var possiblePunc = word.charCodeAt(word.length -1 );
  if ( possiblePunc > 32 && possiblePunc < 48) {
    return word.slice(-1);
  }
}

function checkLetterPosition(code, offset, purpose) {
  if (offset === 13) {
    return (code >= 78 && code <= 90) || (code >= 110 && code <= 122);
  } else {
    if (purpose === "encode") {
      return (code >= (90 - offset) && code <= 90) || (code >= (122 - offset) && code <= 122);
    } else {
      return (code >= 65 && code <= (90 - offset)) || (code >= 97 && code <= (122 - offset));
    }
  }
}

function newLetterEncode (code, offset) {
  if (offset === 13 && checkLetterPosition(code, offset, "encode")) {
    return code - offset;
  } else if (offset !== 13 && checkLetterPosition(code, offset, "encode")) {
      return code + (offset - 26);
  } else {
    return code + offset;
  }
}

function newLetterDecode(code, offset) {
  if (offset === 13 && checkLetterPosition(code, offset, "decode")) {
    return code - offset;
  } else if (offset !== 13 && checkLetterPosition(code, offset, "decode")) {
    return code - (offset - 26);
  } else if (offset !== 13) {
    return code - offset;
  } else {
    return code + offset;
  }
}

function changeString(word, punctuation, offset, purpose) {
  var newWord = [];
  for (var i = 0; i < word.length; i++) {
    var code = word[i].charCodeAt(0);
    var newCode = 0;
    // var offsetAdjuster = offsetChecker(offset);
    if (purpose === "encode") {
      newCode = newLetterEncode(code, offset);
    } else {
      newCode = newLetterDecode(code, offset);
    }
    console.log(code, newCode, offset);
    newWord.push(String.fromCharCode(newCode));
  }
  if (punctuation) {
    newWord.push(punctuation);
  }
  word = newWord.join("");
  return word;
}

function cipher(str, offset, purpose) { // LBH QVQ VG!
  var punctuation = "";
  var words = str.split(" ").map(function(word) {
    punctuation = punctuationChecker(word);
    if (punctuation) {
      word = word.substr(0, word.length -1 );
    }
    if (purpose === "decode" || purpose === "encode") {
      return changeString(word, punctuation, offset, purpose);
    } else {
      throw new Error("Error: You must use either 'encode' or 'decode'");
    }
  });
  
  str = words.join(" ");
  return str;
}

// Change the inputs below to test
// var message = cipher("Serr", 13, "decode");
// console.log(message);
var newMessage = cipher("Fe", 1, "encode");
console.log(newMessage);
// console.log(cipher("Fe", 12, "encode"));
// console.log(cipher("Fe", 13, "encode"));
// console.log(cipher("Fe", 14, "encode"));
// console.log(cipher("Fe", 25, "encode"));
console.log(cipher(newMessage, 1, "decode"));
console.log(cipher("Serr", 13, "decode"));