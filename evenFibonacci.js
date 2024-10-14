function evenFibSum(limit) {
    const fibArray = [1, 2];
    let fibSum = 2;
    while (fibArray[fibArray.length - 1] <= limit) {
        let fibValue = (fibArray[fibArray.length - 1]) + (fibArray[fibArray.length - 2]);
        fibArray.push(fibValue);
        if (fibValue % 2 === 0) {
            fibSum += fibValue;
        }
    }
    return fibSum;
}

console.log(evenFibSum(4000000));