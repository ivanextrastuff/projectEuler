const num = parseInt(prompt("Enter a number: "))
let output = 0
for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        output += i
    }
}

console.log(`The sum of multiples of 3 or 5 below ${num} is: ${output}`)