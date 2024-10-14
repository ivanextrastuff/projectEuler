function palindromes(num) {
    let strNum = num.toString()
    if (strNum !== strNum.split("").reverse().join("")) return false
    return true
}

console.log(palindromes(9009))

for (let i = 100; i < 1000; i++) {
    let num1 = i
    for (let j = 100; j < 1000; j++) {
        if (palindromes(num1*j)) console.log(num1*j)
    }
}
