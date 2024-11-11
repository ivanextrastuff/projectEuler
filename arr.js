let arr1 = [2,3,4,5]
let arr2 = [5,4,3,2]
let arr3 = []
for (let items of arr1) {
    arr3.push(items)
    arr3.map(elem=> parseInt(elem, 10))
    arr3.sort()
}
console.log(arr1.sort())
console.log(arr3)
arr2 = arr1.map(elem=> 2*parseInt(elem,10))
console.log(arr2)