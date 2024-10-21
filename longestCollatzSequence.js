let largest = 0
let maxLength = 0

function terms(num) {
    let count = 1
    while (num !== 1) {
        if (num % 2 === 0) {
            num = num / 2
        } else {
            num = 3 * num + 1
        }
        count += 1
    }
    return count
}

for (let i = 1; i <= 1_000_000; i++) {
    let length = terms(i)
    if (length > maxLength) {
        maxLength = length
        largest = i
    }
}

console.log(largest, maxLength)
