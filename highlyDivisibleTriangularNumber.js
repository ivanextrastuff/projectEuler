function countDivisors(num) {
    let count = 0
    for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) {
            count += (i * i === num) ? 1 : 2
        }
    }
    return count
}

let n = 1
let triangularNumber = 0
let length = 0

while (length <= 500) {
    triangularNumber = (n * (n + 1)) / 2
    length = countDivisors(triangularNumber)
    n++
}

console.log(triangularNumber, length)