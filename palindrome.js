function palindrome(str) {
  // Good luck!
  // arr = str.replace(/[^0-9a-z]/gi, "").toLowerCase().split("");
  // console.log(arr);
  // halfLength = Math.floor(arr.length / 2);
  // fullLength = arr.length - 1;
  // for (var i = 0; i < halfLength; i++) {
  //     if ( arr[i] !== arr[fullLength - i]) {
  //         console.log('not a palindrome');
  //         return false;
  //     }
  // }
  // console.log('palindrome');
    var strLen = str.length;
    var newStr = '';
    for (var i = strLen - 1; i >= 0; i--) {
        newStr += str[i];
    }
    if (str === newStr) {
        console.log('palindrome');
        return true;
    } else {
        console.log('not a palindrome');
        return false;
    }
  
}



palindrome("eye eye");