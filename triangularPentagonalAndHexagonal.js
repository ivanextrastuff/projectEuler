function isTriangular(n) {
    let x = (-1 + Math.sqrt(1 + 8 * n)) / 2
    return x === Math.floor(x)
}

function isPentagonal(n) {
    let x = (1 + Math.sqrt(1 + 24 * n)) / 6
    return x === Math.floor(x)
}

function isHexagonal(n) {
    let x = (1 + Math.sqrt(1 + 8 * n)) / 4
    return x === Math.floor(x)
}

for (let i = 1; i < 10000000000; i++) {
    if (isTriangular(i) && isPentagonal(i) && isHexagonal(i)) {
        console.log(i)
    }
}
