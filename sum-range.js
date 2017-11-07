function sumAll(arr) {
    var sum = 0;
    var big = 0;
    var small = 0;
    if (arr[0] > arr[1]) {
      big = arr[0];
      small = arr[1];
    } else {
      big = arr[1];
      small = arr[0];
    }
  //   for (var i = small; i <= big; i++) {
  //     sum += i;
  //   }
  //   return sum;
    function adder(n) {
      
        if (n < small) {
            return sum;
        } else {
            sum = n + adder(n - 1);
            return sum;
        }
    }
    return adder(big);
}
  
console.log(sumAll([1, 4]));