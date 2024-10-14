import { factorial } from './factorialDigitSum'
let n = 1000000
let arr = []
let sum = 0
for (let i = 1; i < n; i++) {
    arr = i.toString().split('')
    for (let j = 0; j < arr.length; j++) {
        sum += parseInt(factorial(parseInt(arr[j])))
    }
    if (sum === i) console.log(i, arr)
    sum = 0
}