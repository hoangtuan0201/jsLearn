
arr=[-2,3,-5,7,10]
function minMax(arr) {
    const result = {
        min: null,
        max: null
    };

    for (let i =0; i<=arr.length -1;i++) {
        if (result.min === null || arr[i] < result.min) {
            result.min = arr[i];
        }

        // If the max is null OR the value is
        // greater than the max, update the max.
        if (result.max === null || arr[i] > result.max) {
            result.max = arr[i];
        }
    }
    return result
}
// console.log(minMax(arr))
// console.log(minMax([]))


function countWords(words) {
    let dict = {
    }

    // If the word is not in dict, we initialize it with a count of 1.
    // If the word is already in dict, we increment its count by 1.
    for (let i =0;i< words.length; i++ ) {
        if (!dict[words[i]]) {
            dict[words[i]] = 1;
        } else {
            dict[words[i]]++;
        }
    }
    return dict
}
console.log(countWords(['apple','grape','apple','apple']))