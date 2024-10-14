import { prime } from './projectEuler/10001stPrime.js'
console.time('Running time')
let sum = 0
for (let i = 1; i < 2_000_000; i++) {
    if (prime(i)) sum += i
}
console.timeEnd('Running time')
console.log(`Summation: ${sum}`)
