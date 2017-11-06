function punctuationChecker(word) {
  var possiblePunc = word.charCodeAt(word.length -1 );
  if ( possiblePunc > 32 && possiblePunc < 48) {
    return word.slice(-1);
  }
}

function checkLetterPosition(code, offset, purpose) {
  if (offset === 13) {
    return (code >= 78 && code <= 90) || (code >= 110 && code <= 122);
  } 
  if ((offset > 0 && offset < 10) || (offset === 24) || offset === 25) {
    console.log('caught');
    // if (purpose === "encode") {
    //   return (code >= (90 - offset) && code <= 90) || (code >= (122 - offset) && code <= 122);
    // } else {
      // return (code >= 65 && code <= (90 - offset)) || (code >= 97 && code <= (122 - offset));
      return (code >= (90 - offset) && code <= 90) || (code >= (122 - offset) && code <= 122);
    // }
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
    if (purpose === "encode") {
      newCode = newLetterEncode(code, offset);
    } else {
      newCode = newLetterDecode(code, offset);
    }
    // console.log(code, newCode, offset);
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
// console.log(cipher("Serr", 13, "decode"));
// var encodeThis = "Up your mama's nose!"

// var newMessage = cipher(encodeThis, 1, "encode");
// console.log(newMessage);
// console.log(cipher(newMessage, 1, "decode"));
// // 1 to 9 works and 13, 24, 25 work.
// var newMessage2 = cipher(encodeThis, 12, "encode");
// console.log(newMessage2);
// console.log(cipher(newMessage2, 12, "decode"));

// var newMessage3 = cipher(encodeThis, 14, "encode");
// console.log(newMessage3);
// console.log(cipher(newMessage3, 14, "decode"));

// var newMessage4 = cipher(encodeThis, 20, "encode");
// console.log(newMessage4);
// console.log(cipher(newMessage4, 20, "decode"));

// var newMessage5 = cipher(encodeThis, 6, "encode");
// console.log(newMessage5);
// console.log(cipher(newMessage5, 6, "decode"));

//Solution that I found online

function caseMatcher(character) {
  return character.match(/[a-z]/i);
}

function upperChecker(code) {
  return (code >=65) && (code <= 90);
}

function lowerChecker(code) {
  return (code >= 97) && (code <= 122);
}

function caesarCipher(str, offset) {
  if (offset < 0) {
    return caesarCipher(str, offset + 26);
  }
  var newStr = "";
  for (var i = 0; i < str.length; i++) {

    var character = str[i];
    // checks for letters
    if (caseMatcher(character)) {

      var code = str.charCodeAt(i);
      // changes the letter
      if (upperChecker(code)) {
        character = String.fromCharCode(((code - 65 + offset) % 26) + 65);
      }
      else if (lowerChecker(code)) {
        character = String.fromCharCode(((code - 97 + offset) % 26) + 97);
      }
    }

    // Starts creating a new string
    newStr += character;

  }

  // Returns the new string
  return newStr;

}

var message = caesarCipher("Free Code Camp!", 12);
console.log(message);
console.log(caesarCipher(message, -12));