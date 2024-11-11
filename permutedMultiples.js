let running = true
let num = 0
let num2 = 0
let arr1 = []
let arr2 = []
let num_arr = []

function compare_arr(arr1, arr2){
    let dict = []
    dict.push(arr1,arr2)
    for (let arr of dict){
        if (arr){
            //todo
        }
    }
    return dict
}    
    
// while (running) {
//     num++
//     arr1 = num.toString().split('')
//     num_arr = arr1.map(elem=> parseInt(elem, 10)).sort()
//     num2 = num*2
//     arr2 = num2.toString().split('')
//     arr2 = arr2.map(elem=> parseInt(elem, 10)).sort()
//     console.log(num)
// }

console.log(compare_arr([2,3,4],[4,5,3]))