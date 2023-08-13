let array = [];

num = process.argv[2];

function primeNumbers(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return num !== 1;
}


function printPrimeNumbers(max) {
    for (let i = 2; i <= max; i++) {
        if (primeNumbers(i))
            array.push(i);
    }
    console.log(array);
}

console.time();
printPrimeNumbers(num);
console.timeEnd();