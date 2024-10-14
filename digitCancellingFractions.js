function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

let numerators = 1
let denominators = 1
let a = 0
let b = 0
let c = 0

for (let i = 1; i <= 9; i++) {
    a = i
    for (let j = 1; j <= 9; j++) {
        b = j
        for (let k = 1; k <= 9; k++) {
            c = k
            if ((10 * a + b) / (10 * b + c) === a / c && (10 * a + b) < (10 * b + c)) {
                console.log(`Found: ${10 * a + b}/${10 * b + c} = ${a}/${c}`)
                numerators *= 10 * a + b
                denominators *= 10 * b + c
            }
        }
    }
}

let divisor = gcd(numerators, denominators)
numerators /= divisor
denominators /= divisor

console.log(`The simplified denominator is: ${denominators}`);