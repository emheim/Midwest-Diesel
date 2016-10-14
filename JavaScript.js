function multiples(n) {
    var nSum = 0;
    for (var i = 0; i <= n; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            nSum += i;
        }
    }
}

console.log(multiples(1000));