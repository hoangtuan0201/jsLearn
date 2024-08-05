let nums = [10,20,30];
nums[2] = 99
console.log(nums)


//1b

function getLastValue(array) {
    const lastIndex = array.length - 1
    return array[lastIndex]
}
console.log(getLastValue([10,22,24,5]))
console.log(getLastValue(['good', 'good', 'hello']))

//11c
function arraySwap(array) {
    const lastIndex = array.length - 1
    let firstValue = array[0]
    let lastValue = array[lastIndex]

    array[lastIndex] = firstValue
    array[0] = lastValue
    return array
}
console.log(arraySwap([1,2,3,4,5]))
