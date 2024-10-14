export function prime(num) {
    for (let i = 2; i < num; i++) {
      if (Number.isInteger(num / i)) return false
    }
    return true
  }
  
  if (require.main === module) {
    let count = 0
    let num = 1
    let primeNumber = 0
  
    while (count < 10001) {
      num++;
      if (prime(num)) {
        count++
        primeNumber = num
      }
    }
  
    console.log(`The 10001st prime number is: ${primeNumber}`)
  }
  