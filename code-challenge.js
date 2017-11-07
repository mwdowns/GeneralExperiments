exports.sayHello = (name) => {
    console.log(name);
}

exports.changeNumber = (num) => {
	num = 2
}

// javascript passing by value primative vs object

exports.changeObj = (obj) => {
	obj.f = 'changed!'
}

exports.isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

exports.isPrimeNumber = (number) => {
    if (number >= 0) {
        for (var i = 2; i < number; i++) {
            if (number % i === 0 ) {
                return false;
            }
        }
        return true;
    }
}

exports.sort = (numArray) => {
    numArray.sort(function(a,b) {
        return a - b;
    });
    return numArray;
}

exports.intersect = (numArray1, numArray2) => {
    var intersect = [];
    numArray1.map(function(x) {
        if (numArray2.indexOf(x) !== -1) {
            intersect.push(x);
        }
    });
    return intersect;
}

exports.join = (numArray1, numArray2) => {
    return numArray1.concat(numArray2);
}


exports.wordCount = (text, word) => {
    var exp = new RegExp(word, "gi");
    count1 = text.match(exp).length;
    return count1;
}