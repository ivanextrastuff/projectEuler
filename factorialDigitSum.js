export function factorial(x) {
    if (x == 0) return BigInt(1)
    else return BigInt(x) * factorial(x - 1)
}
let output = 0
let fact = factorial(100).toString().split("")
for (let i = 0; i < fact.length; i++) {
    output += parseInt(fact[i])
}
console.log(fact)
console.log(output)