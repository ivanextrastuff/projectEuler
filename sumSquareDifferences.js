let num = 101
let total = 0
let square = 0
for (let i = 1; i < num; i++){
    total += i*i
    console.log(total)
}
for (let j = 0; j< num;j++){
    square += j
    console.log(square)
}
let b = square *square
console.log(b-total)