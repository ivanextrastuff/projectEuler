function genPrime(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        if (math.isPrime(i)) arr.push(i)
    }
}

console.log(genPrime(10))