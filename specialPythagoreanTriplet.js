for (let a = 1; a < 1000; a++) {
    for (let b = 1; b < 1000; b++) {
        for (let c = 1; c < 1000; c++) {
            if (a**2+b**2 === c**2 && a + b + c === 1000) {
                console.log(`${a}^2 + ${b}^2 = ${c}^2`)
                console.log(`abc = ${a*b*c}`)
            }
        }
    }
}