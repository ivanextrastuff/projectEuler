function isPalindrome(n) {
    const str = n.toString()
    return str === str.split('').reverse().join('')
}
let lychrel = 0
for (let i = 1; i <= 10000; i++) {
    let num = i
    let isLychrel = true

    for (let count = 0; count < 50; count++) {
        const reversed = parseInt(num.toString().split('').reverse().join(''))
        num += reversed
        if (isPalindrome(num)) {
            isLychrel = false
            break
        }
    }
    if (isLychrel) lychrel++
}

console.log(lychrel)