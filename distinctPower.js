let arr = []
let temp = 0
for (let i = 2n; i <= 100n; i++){
    for (let j = 2n; j <= 100n; j++) {
        temp = i**j
        if (!arr.includes(temp)) arr.push(temp)
    }
}
console.log(arr.length)