function dec2bin(dec) {
    return (dec >>> 0).toString(2)
}

function palindromes(num) {
    let strNum = num.toString();
    if (strNum !== strNum.split("").reverse().join("")) return false
    let binNum = dec2bin(num)
    if (binNum !== binNum.split("").reverse().join("")) return false
    return true
}
let output = 0
for (let i = 0; i < 1_000_000;i++) {
    if (palindromes(i)) output+=i
}
console.log(output)