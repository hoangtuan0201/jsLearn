// for (let i  = 0; i <=10; i+=2) {
//     console.log(i)
// }

// for (let i =5; i>=0; i--) {
//     console.log(i)
// }
// let i = 5
// while (i>=0) {
//     console.log(i)
//     i-=1
// }

// let i =0;
// while(i<=10) {
//     console.log(i)
//     i+=2
// }

// array = [1,2,3]
// for (let i=0; i<=array.length-1;i++) {
//     array[i] +=1;
// }
// console.log(array)
array = [1,2,3]
function addOne(array) {
    for (let i =0; i<= array.length-1; i++) {
        array[i] +=1
    }
    return array
}
console.log(addOne(array))