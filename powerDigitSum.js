let big = (BigInt(2**1000)).toString().split("")
let output = 0
for (let i = 0; i < big.length; i++) {
    output += parseInt(big[i])
}
console.log(output)