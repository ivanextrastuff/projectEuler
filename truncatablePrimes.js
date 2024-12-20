function isPrime(n) {
    for(let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if(n % i === 0) return false
    }
    return n > 1
}

let a = []

for (let i = 2; i < 50; i++) {
    if (isPrime(i)){
        for (let j = 0; j < i.toString().length; j++) {
            let str_n = i.toString()
            if (isPrime(parseInt(str_n.slice(1))))
            a.push(i)
        }
    }
}

console.log(a)