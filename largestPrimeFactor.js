import { prime } from './projectEuler/10001stPrime.js'
let num = 600851475143
let prime_list = []
for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num%i === 0) {
        if (prime(i)) prime_list.push(i)
    }
}
console.log(prime_list[prime_list.length-1])