num = process.argv[2];

function primeNumbers(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return num !== 1;
}


function printPrimeNumbers(numPrimes) {
    let arr = [];
    for (let i = 2; i <= numPrimes; i++) {
        if (primeNumbers(i))
            arr.push(i);
    }
    return arr;
}

console.time();
console.log(printPrimeNumbers(num));  //node hw2.js 10 or 100....
console.timeEnd();
