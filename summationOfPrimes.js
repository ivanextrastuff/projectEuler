export function sieveOfEratosthenes(limit) {
    let sieve = new Array(limit + 1).fill(true)
    sieve[0] = sieve[1] = false

    for (let i = 2; i * i <= limit; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= limit; j += i) sieve[j] = false
        }
    }
    return sieve.map((isPrime, number) => isPrime ? number : null).filter(Boolean)
}

let sum = 0
let primes = sieveOfEratosthenes(2_000_000)
for (let i = 0; i < primes.length; i++) sum += primes[i]
console.log(sum)