let arr = []
let ans = -1
for (let i = 1; i < 10000000; i++) {
    let num = i
    let sum = 0
    arr = num.toString().split('')
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j]**5
    }
    if (sum === i) ans += i
}
console.log(ans)