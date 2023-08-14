let arr = [];

num = process.argv[2];

function primeNumbers(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return num !== 1;
}


function printPrimeNumbers(numPrimes) {
    for (let i = 2; i <= numPrimes; i++) {
        if (primeNumbers(i))
            arr.push(i);
    }
    console.log(arr);
}

console.time();
printPrimeNumbers(num);  //node main.js 10 or 100.... 
console.timeEnd();
