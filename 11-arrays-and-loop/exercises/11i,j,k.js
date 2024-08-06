function addNum(array,num) {
    for(let i in array) {
        array[i] += num
    }
    return array
}
// console.log(addNum([-2,-1,0,99],2))
function addArrays(array1, array2) {
    for (let i =0; i<= array1.length-1; i++) {
        array1[i] += array2[i]
    }

   return array1
}
// console.log(addArrays([1,1,2], [1,1,3])); //output = [ 2, 2, 5 ]
let count =0
function countPositive(nums) {
    //if function encounter positive number in array count +1
    for (let i =0; i <= nums.length;i++) {
        if (nums[i]>=0) {
            count+=1
        }
    }
    return count
}
// console.log(countPositive([1,2,3,4,5,6])) output = 6