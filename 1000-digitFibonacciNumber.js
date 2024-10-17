const fibArray = [1, 2];
let fibValue;

do {
    fibValue = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    fibArray.push(fibValue);
} while (fibValue < 10n ** 1000n); // Use BigInt for large numbers

console.log(fibArray.length+1);
