import BigNumber from 'bignumber.js'

let sum = new BigNumber(0)
for (let i = 1; i <= 1000; i++) {
    let bigNum = new BigNumber(i).pow(i)
    sum = sum.plus(bigNum)
}
let sumStr = sum.toFixed()
let lastTenDigits = sumStr.slice(-10)
console.log(lastTenDigits)