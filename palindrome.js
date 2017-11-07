function evenOddCheck(strLen) {
    return strLen % 2 === 0;
}

function stringEqualCheck(str, newStr) {
    return str === newStr;
}

function palindrome(str) {

    var strLen = str.length;
    var newStr = '';
    for (var i = strLen - 1; i >= Math.ceil(strLen / 2); i--) {
        newStr += str[i];
    }
    if (evenOddCheck(strLen)) {
        str = str.substr(0,  Math.floor(str.length / 2));
    } else {
        str = str.substr(0, strLen / 2);
    }
    if (stringEqualCheck(str, newStr)) {
        console.log('palindrome');
        return true;
    } else {
        console.log('not a palindrome');
        return false;
    }
  
}

palindrome("eye! !eye");