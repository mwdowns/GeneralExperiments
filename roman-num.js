function tensCheck(i) {

    if (i === 0) {
        return ["I", "V", "X"];
    }
    if (i === 1) {
        return ["X", "L", "C"]
    }
    if (i === 2) {
        return ["C", "D", "M"]
    }
    if (i === 3) {
        return ["M"];
    }

}

function numeral(n, i) {
    letters = tensCheck(i);
    n = parseInt(n);
    console.log(n, i, letters);
    output = '';
    if (n === 0) {
        return;
    }
    if (n > 0 && n < 4) {
        output = Array(n + 1).join(letters[0]);
    }
    if (n === 4) {
        output = letters[0] + letters[1];
    }
    if (n === 5) {
        output = letters[1];
    }
    if (n > 5 && n < 9) {
        output = letters[1] + (Array(n - 4).join(letters[0]));
    }
    if (n === 9) {
        output = letters[0] + letters[2];
    }
    return output;
}

function convertToRoman(num) {
    num = num.toString();
    num = num.split("").reverse();
    var numLen = num.length;
    var newNum = '';
    console.log(numLen);
    for (var i = numLen - 1; i >= 0; i--) {
        num[i] = numeral(num[i], i);
    }
    num = num.reverse().join("");
    return num;
}
 
console.log(convertToRoman(500));
 