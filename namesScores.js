let file = Bun.file('./names.txt')
let text = await file.text()
let arr = text.split(",").map(str => str.trim().replace(/^"|"$/g, ""))
let alphabetObject = {}
function wordScore(s) {
    let score = 0 
    for (let letter of s.toLowerCase()) {
        if (letter in alphabetObject) score += alphabetObject[letter]
    }
    return score
}
for (let i = 0; i < 26; i++) {
  alphabetObject[String.fromCharCode(97 + i)] = i + 1
}

let sum = 0
for (let i = 0; i < arr.length;i++) sum+=(i+1)*wordScore(arr[i])
console.log(sum)